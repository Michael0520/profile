<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'
</script>

<template>
  <div class="gd-container font-spacegrotesk">
    <header class="fixed w-full bg-[#F1F2F4] dark:bg-slate-950 z-50">
      <MainHeader />
    </header>
    <main>
      <div class="p-9" />
      <Analytics />
      <slot />
    </main>
    <footer>
      <MainFooter />
    </footer>
  </div>
</template>

<style scoped>
.gd-container {
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
}
</style>
