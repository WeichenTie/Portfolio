<template>
  <nav ref="navbar" class="bg-inherit bg-pampas-100 font-display text-2xl">
    <NuxtLink to="/">WT</NuxtLink>
    <div class="ml-auto flex gap-8 sm:hidden">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/projects">Projects</NuxtLink>
      <NuxtLink to="/experience">Resume/CV</NuxtLink>
      <NuxtLink to="/#contact">Contact</NuxtLink>
    </div>

    <div class="ml-auto hidden gap-8 sm:flex">
      <Sheet>
        <SheetTrigger
          ><Icon size="30" name="radix-icons:hamburger-menu"></Icon
        ></SheetTrigger>
        <SheetContent class="w-[90vw] max-w-[640px] bg-pampas-100 px-0">
          <SheetHeader>
            <VisuallyHidden>
              <SheetTitle>Navigation</SheetTitle>
            </VisuallyHidden>
          </SheetHeader>
          <SheetClose class="w-full text-left">
            <div class="mt-8 flex flex-col font-display text-xl">
              <NuxtLink class="px-8 py-4 hover:bg-pampas-200" to="/"
                >Home</NuxtLink
              >
              <NuxtLink class="px-8 py-4 hover:bg-pampas-200" to="/projects"
                >Projects</NuxtLink
              >
              <NuxtLink class="px-8 py-4 hover:bg-pampas-200" to="/experience"
                >Resume/CV</NuxtLink
              >
              <NuxtLink class="px-8 py-4 hover:bg-pampas-200" to="/#contact"
                >Contact</NuxtLink
              >
            </div>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "radix-vue";
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
</style>
