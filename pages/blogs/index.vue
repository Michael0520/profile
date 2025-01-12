<script lang="ts" setup>
import Fuse from 'fuse.js'
import dayjs from 'dayjs'

const formatDate = (date: string) => {
  return dayjs(date).format('DD MMM YYYY')
}

const { data } = await useAsyncData('blogs', () =>
  queryContent('/blogs')
    .where({ published: true })
    .sort({ $numeric: true, date: -1 })
    .find()
)

const elementPerPage = ref(5)
const pageNumber = ref(1)
const searchQuery = ref('')

const formattedData = computed(() => {
  return data.value?.map((article) => ({
    path: article._path,
    title: article.title || 'Untitled',
    description: article.description || 'No description available',
    image: article.image || '/not-found.jpg',
    alt: article.alt || 'No image description available',
    ogImage: article.ogImage || '/not-found.jpg',
    date: formatDate(article.date),
    tags: article.tags || [],
    published: article.published || false,
  })) || []
})

const fuse = computed(() => new Fuse(formattedData.value, {
  keys: ['title', 'description'],
  threshold: 0.4,
  includeScore: false,
}))

const searchResults = computed(() => {
  if (!searchQuery.value.trim()) {
    return formattedData.value
  }
  return fuse.value.search(searchQuery.value).map(result => result.item)
})

const paginatedData = computed(() => {
  const startIndex = (pageNumber.value - 1) * elementPerPage.value
  const endIndex = startIndex + elementPerPage.value
  return searchResults.value.slice(startIndex, endIndex)
})

const totalPages = computed(() =>
  Math.ceil(searchResults.value.length / elementPerPage.value)
)

const navigation = {
  previous: () => {
    if (pageNumber.value > 1) pageNumber.value--
  },
  next: () => {
    if (pageNumber.value < totalPages.value) pageNumber.value++
  }
}

useHead({
  title: 'Blog Archive',
  meta: [{
    name: 'description',
    content: 'Collection of articles about programming, web development, and technology.'
  }]
})

const siteData = useSiteConfig()
defineOgImage({
  props: {
    title: 'Blog Archive',
    description: 'Collection of articles about programming, web development, and technology.',
    siteName: siteData.url,
  },
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <ArchiveHero />

    <!-- Search Input -->
    <div class="px-6">
      <input
        v-model="searchQuery"
        type="search"
        placeholder="Search articles..."
        class="block w-full bg-[#F1F2F4] dark:bg-slate-900 dark:placeholder-zinc-500
               text-zinc-600 dark:text-zinc-300 rounded-md border-gray-300
               dark:border-gray-800 shadow-sm focus:border-indigo-300
               focus:ring focus:ring-indigo-200 focus:ring-opacity-50
               px-4 py-2"
      />
    </div>

    <!-- Articles List -->
    <div v-auto-animate class="space-y-5 my-5 px-4">
      <template v-if="paginatedData.length">
        <ArchiveCard
          v-for="post in paginatedData"
          :key="post.path"
          v-bind="post"
        />
      </template>
      <ArchiveCard
        v-else
        title="No Posts Found"
        image="/not-found.jpg"
      />
    </div>

    <!-- Pagination -->
    <div class="flex justify-center items-center space-x-6">
      <button
        :disabled="pageNumber <= 1"
        class="disabled:opacity-50"
        @click="navigation.previous"
      >
        <Icon
          name="mdi:code-less-than"
          size="30"
          :class="{ 'text-sky-700 dark:text-sky-400': pageNumber > 1 }"
        />
      </button>
      <p>{{ pageNumber }} / {{ totalPages }}</p>
      <button
        :disabled="pageNumber >= totalPages"
        class="disabled:opacity-50"
        @click="navigation.next"
      >
        <Icon
          name="mdi:code-greater-than"
          size="30"
          :class="{ 'text-sky-700 dark:text-sky-400': pageNumber < totalPages }"
        />
      </button>
    </div>
  </main>
</template>
