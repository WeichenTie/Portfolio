<template>
  <div
    ref="container"
    class="outer-container mt-96 flex min-h-screen items-center justify-center px-8"
  >
    <div class="w-full max-w-[1440px]">
      <h2 class="mb-12 text-6xl font-black">
        What I <span class="text-teal-500">work with</span>.
      </h2>
      <div v-for="group in groups" :key="group.label" class="skill-row">
        <h3>{{ group.label }}</h3>
        <ul>
          <li v-for="name in group.items" :key="name" class="skill-name">
            {{ name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.skill-row {
  @apply grid grid-cols-[220px_1fr] gap-8 border-t border-neutral-900/15 py-8 md:grid-cols-1 md:gap-2 md:py-6;

  &:last-child {
    @apply border-b;
  }
}

h3 {
  @apply pt-3 text-lg font-semibold text-neutral-500 md:pt-1;
}

ul {
  @apply flex flex-wrap gap-x-8 gap-y-1 md:gap-x-5;
}

.skill-name {
  @apply font-display text-5xl uppercase leading-tight md:text-4xl;
  transition: color 200ms ease;

  &:hover {
    @apply text-teal-500;
  }
}
</style>

<script lang="ts" setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let ctx: gsap.Context;
const container = ref();
onMounted(() => {
  ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.value,
        start: "35% bottom",
      },
    });
    tl.from("h2, .skill-row", {
      opacity: 0,
      y: -10,
      duration: 0.75,
      stagger: 0.03,
    });
  }, container.value);
});

onUnmounted(() => ctx?.revert());

const groups = [
  { label: "Languages", items: ["TypeScript", "PHP", "Python", "C/C++", "SQL", "HTML", "CSS"] },
  { label: "Frameworks", items: ["Angular", "Nuxt", "Next.js", "Flask"] },
  { label: "Infrastructure", items: ["Docker", "RabbitMQ", "Thrift", "Redshift", "Cloudflare"] },
  { label: "Tools", items: ["Git", "Kibana", "Grafana"] },
];
</script>
