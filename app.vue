<template>
  <Cursor></Cursor>
  <Navbar></Navbar>
  <div class="page-container">
    <NuxtPage></NuxtPage>
  </div>
  <Toaster />
</template>
<style>
.page-container {
  @apply min-h-screen w-full bg-pampas-100 font-primary text-2xl text-neutral-900 md:text-xl sm:text-lg;
}
</style>

<script setup lang="ts">
import Toaster from "@/components/ui/toast/Toaster.vue";
</script>
