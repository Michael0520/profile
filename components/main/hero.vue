<script setup lang="ts">
import { homePage } from '~/data'
</script>

<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 items-center">
      <div class="px-6">
        <h1
          class="text-[#3F4AE8] dark:text-[#6871e9] font-semibold leading-tight text-4xl md:text-5xl my-5"
        >
          {{ homePage.title }}
        </h1>
        <p class="dark:text-zinc-300">
          {{ homePage.description }}
        </p>
      </div>
      <div class="p-6 justify-self-center">
        <!-- <LogoDog /> -->
        <!-- <img src="~/assets/images/logo.jpg" alt="dog" /> -->
        <NuxtImg src="/logo.jpg" width="450" height="500" quality="50" class="rounded-md" />
      </div>
    </div>
  </div>
</template>
