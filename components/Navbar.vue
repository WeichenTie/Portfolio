<template>
  <nav class="font-display text-2xl mix-blend-difference">
    <NuxtLink to="/">WT</NuxtLink>
    <div class="ml-auto flex gap-8">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/">Projects</NuxtLink>
      <NuxtLink to="/">Resume/CV</NuxtLink>
      <NuxtLink to="/">Contact</NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
nav {
  @apply fixed left-0 top-0 z-50 flex h-24 w-full items-center px-32;
}
a {
  @apply relative inline-block bg-white bg-clip-text text-transparent;
}
</style>
