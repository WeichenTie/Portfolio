<template>
  <Navbar></Navbar>
  <div class="page-container">
    <NuxtPage></NuxtPage>
  </div>
</template>
<style>
.page-container {
  @apply min-h-screen w-full bg-pampas-100 font-primary text-2xl text-neutral-900 md:text-xl sm:text-lg;
}
</style>

<script setup lang="ts"></script>
