<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
let ctx: gsap.Context;
const projectsQuery = queryContent("projects");
const projects = await projectsQuery.where({ showcased: true }).find();
const projectsLeft = projects.filter((_, i) => {
  return i % 2 === 0;
});
const projectsRight = projects.filter((_, i) => {
  return i % 2 !== 0;
});
const container = ref();

onMounted(() => {
  useCursor(".project-card, .view-all-card", container.value);
  ctx = gsap.context((self) => {
    gsap.from(".view-all-card", {
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".view-all-card",
        start: "top center",
      },
    });
    gsap.from("h2", {
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: "h2",
        start: "top center",
      },
    });
  }, container.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <div ref="container" class="container relative z-20 text-pampas-100">
    <div class="container-inner-wrapper">
      <h2
        class="col-span-full col-start-2 mt-auto font-display text-6xl font-bold"
      >
        Works I'm <span class="text-rose-500">proud</span> of.
      </h2>

      <div class="project-container-wrapper">
        <div class="project-container project-container-left">
          <HomeProjectCard
            v-for="item in projectsLeft"
            :key="item._path"
            :data="item"
          ></HomeProjectCard>
        </div>
        <div class="project-container project-container-right">
          <HomeProjectCard
            v-for="item in projectsRight"
            :key="item._path"
            :data="item"
          ></HomeProjectCard>
          <NuxtLink class="view-all-card" to="/projects"
            >View More Projects</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  @apply rounded-[4rem] bg-neutral-900 px-8 py-36 shadow-[0_10a_50px_-10px_rgba(0,0,0,1)];
}

.container-inner-wrapper {
  @apply mx-auto w-full max-w-[1440px];
}

.project-container {
  @apply flex w-full  flex-col items-center gap-y-16 lg:grid-cols-1;
}

.view-all-card {
  @apply flex w-full flex-1 items-center justify-center rounded-[4rem]  border-4 text-4xl font-black text-pampas-100  shadow-xl shadow-pampas-950 duration-300 hover:bg-pampas-100 hover:text-neutral-900 hover:shadow-pampas-800;
}

.project-container-wrapper {
  @apply col-span-full mt-16 grid grid-cols-2  gap-x-16 lg:grid-cols-1;
}
</style>
