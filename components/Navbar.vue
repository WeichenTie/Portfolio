<template>
  <nav ref="navbar" class="bg-pampas-100 font-display text-2xl">
    <NuxtLink to="/">WT</NuxtLink>
    <div class="ml-auto flex gap-8 sm:hidden">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/projects">Projects</NuxtLink>
      <NuxtLink to="/experience">Resume/CV</NuxtLink>
      <NuxtLink to="/#contact">Contact</NuxtLink>
    </div>

    <div class="ml-auto hidden gap-8 sm:flex">
      <button>
        <Icon size="30" name="radix-icons:hamburger-menu"></Icon>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
const { directions } = useScroll(window);
const navbar = ref();

watch([directions], () => {
  const { top, bottom } = directions;
  if (top) {
    gsap.to(navbar.value, {
      yPercent: 0,
      duration: 0.3,
    });
  } else if (bottom) {
    gsap.to(navbar.value, {
      yPercent: -100,
      duration: 0.3,
    });
  }
});
</script>

<style scoped>
nav {
  @apply fixed left-0 top-0 z-50 flex h-24 w-full items-center px-16;
}
a {
  @apply text-neutral-900;
}
</style>
