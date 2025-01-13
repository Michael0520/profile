<script setup lang="ts">
import { homePage } from "~/data"
import FlipWords from "~/components/ui/FilpWords.vue"
import SparklesText from "~/components/ui/SparklesText.vue"
</script>

<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 items-center">
      <!-- hero text -->
      <div class="flex h-[40rem] items-center justify-center px-4">
        <div class="mx-auto text-4xl font-normal text-neutral-600 dark:text-neutral-400">
          <SparklesText
            :text="homePage.title"
            :colors="{ first: '#9E7AFF', second: '#FE8BBB' }"
            :sparkles-count="10"
            class="my-8"
          />

          <p class="dark:text-zinc-300">
            A Software Engineer. Get Web Development,

            <FlipWords
              :words="['Typescript.', 'React/VueJs.', 'Next/Nuxt.']"
              :duration="3000"
              class="text-4xl !text-primary"
            />
            <br />
            <br />
            Related Articles, Tips, Learning resources and more.
          </p>
        </div>
      </div>

      <!-- hero image -->
      <div class="p-6 justify-self-center">
        <NuxtImg src="/logo.jpg" width="450" height="500" quality="50" class="rounded-md" />
      </div>
    </div>
  </div>
</template>
