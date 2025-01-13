<script setup lang="ts">
import { defineProps } from "vue"
import { socialLinks } from "~/data"

interface Props {
  title: string
}

defineProps<Props>()
</script>

<template>
  <div>
    <h2 class="mb-6 text-sm tracking-tighter font-medium text-gray-900 dark:text-white">
      {{ title }}
    </h2>
    <div class="my-3 space-x-2 md:space-x-3 pb-10">
      <NuxtLink
        :to="socialLinks.githubLink"
        target="_blank"
        class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
        aria-label="Github"
      >
        <Icon name="fa:github" size="1em" />
      </NuxtLink>
      <NuxtLink
        :to="socialLinks.instagramLink"
        target="_blank"
        class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
        aria-label="Instagram"
      >
        <Icon name="fa:instagram" size="1em" />
      </NuxtLink>
      <NuxtLink
        :to="socialLinks.twitterLink"
        target="_blank"
        class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
        aria-label="Twitter"
      >
        <Icon name="fa:twitter-square" size="1em" />
      </NuxtLink>
      <NuxtLink
        :to="socialLinks.ghostWebSiteLink"
        target="_blank"
        class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
        aria-label="Ghost"
      >
        <Icon name="fa:globe" size="1em" />
      </NuxtLink>
    </div>
  </div>
</template>
