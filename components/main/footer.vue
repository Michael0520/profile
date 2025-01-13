<script setup lang="ts">
import { aboutPage, socialLinks, copyright } from "~/data"
</script>

<template>
  <footer class="py-5 border-t dark:borqder-gray-800 mt-5 text-zinc-700 dark:text-zinc-300">
    <div class="px-6 container max-w-5xl mx-auto">
      <div class="mx-auto w-full max-w-screen-xl xl:pb-2">
        <div class="md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4">
          <!-- Company Info -->
          <div class="mb-12 flex-col flex gap-4">
            <NuxtLink
              class="flex items-center gap-2"
              :href="socialLinks.ghostWebSiteLink"
              target="_blank"
              aria-label="Ghost"
            >
              <NuxtImg src="/brand.jpg" width="40" height="40" quality="50" class="rounded-md" />
              <span class="jsx-d89dd47fba53c125"> </span>
            </NuxtLink>
            <p class="max-w-xs">{{ aboutPage.description }}</p>
          </div>

          <!-- Links Groups -->
          <div class="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-1">
            <FooterLinkGroup title="Community" />
          </div>
        </div>

        <!-- Footer Bottom -->
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-md py-4 px-8 gap-2"
        >
          <div class="flex space-x-5 sm:justify-center sm:mt-0">
            <a
              class="text-gray-500 hover:text-gray-900 dark:hover:text-gray-600 fill-gray-500 hover:fill-gray-900 dark:hover:fill-gray-600"
              href="https://michael-lo.ghost.io/"
            >
              <span class="sr-only">Github</span>
            </a>
          </div>
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Copyright © {{ copyright.year }}
            <a class="cursor-pointer" href="/">{{ copyright.company }}</a
            >. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.4s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
