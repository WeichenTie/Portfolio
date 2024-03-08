<template>
  <div class="project-card" ref="container">
    <NuxtLink :to="data._path" class="contents">
      <NuxtImg
        fit="cover"
        class="w-full object-cover"
        format="webp"
        :src="data.thumbnail"
      ></NuxtImg>
      <div>
        <h3 class="font-display text-3xl font-bold">{{ data.title }}</h3>
        <span
          class="mt-2 inline-block text-lg opacity-40 italic"
          v-for="tag in data.technologies"
          >#{{ tag }}&nbsp;</span
        >
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
let ctx: gsap.Context;
const props = defineProps<{
  flip?: boolean;
  data: any;
}>();

const container = ref();

onMounted(() => {
  ctx = gsap.context((self) => {
    gsap.from(container.value, {
      opacity: 0,
      duration: 1.5,
      display: "hidden",

      scrollTrigger: {
        trigger: container.value,
        start: "top center",
      },
    });
    gsap.from(container.value, {
      scrollTrigger: {
        trigger: container.value,
        start: "top center",
      },
      duration: 0.01,
      pointerEvents: "none",
    });
  });
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<style scoped>
.project-card {
  @apply pointer-events-auto flex flex-col gap-12;
}

.project-card img {
  @apply overflow-hidden rounded-[4rem] shadow-xl shadow-pampas-950  duration-300 hover:shadow-pampas-800;
}

.project-container-left .project-card:nth-of-type(1) img {
  @apply aspect-[5/6.5];
}
.project-container-left .project-card:nth-of-type(2) img {
  @apply aspect-[5/5];
}
.project-container-left .project-card:nth-of-type(3) img {
  @apply aspect-[5/6.5];
}
.project-container-left .project-card:nth-of-type(4) img {
  @apply aspect-[5/5];
}
.project-container-right .project-card:nth-of-type(1) {
  @apply mt-[50%];
}
.project-container-right .project-card:nth-of-type(1) img {
  @apply aspect-[5/5];
}
.project-container-right .project-card:nth-of-type(2) img {
  @apply aspect-[5/6];
}
.project-container-right .project-card:nth-of-type(3) img {
  @apply aspect-[5/5];
}
</style>
