<template>
  <div
    ref="container"
    class="outer-container mt-96 flex min-h-screen items-center justify-center px-8"
  >
    <div class="w-full max-w-[1440px]">
      <h2 class="text-6xl font-black">
        <span class="text-teal-500">Skills</span> I offer.
      </h2>
      <div class="skillset-wrapper">
        <h3>Languages.</h3>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
          <div v-for="item in languages" :key="item.name" class="skill-card">
            <Icon class="skill-icon" :name="item.icon" />
            <div class="flex flex-col gap-1">
              <span class="skill-name">{{ item.name }}</span>
              <span class="skill-flavor">{{ item.flavor }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="skillset-wrapper">
        <h3>Frameworks.</h3>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
          <div v-for="item in frameworks" :key="item.name" class="skill-card">
            <Icon class="skill-icon" :name="item.icon" />
            <div class="flex flex-col gap-1">
              <span class="skill-name">{{ item.name }}</span>
              <span class="skill-flavor">{{ item.flavor }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="skillset-wrapper">
        <h3>Developer Tools.</h3>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
          <div v-for="item in devTools" :key="item.name" class="skill-card">
            <Icon class="skill-icon" :name="item.icon" />
            <div class="flex flex-col gap-1">
              <span class="skill-name">{{ item.name }}</span>
              <span class="skill-flavor">{{ item.flavor }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
h3 {
  @apply mb-6 mt-12 text-2xl font-semibold;
}

.skill-card {
  @apply flex flex-row items-start gap-4 rounded-2xl border border-pampas-300 bg-pampas-50 p-5;
  transition:
    border-color 300ms ease,
    box-shadow 300ms ease;

  &:hover {
    @apply border-neutral-900/60 shadow-sm;
  }
}

.skill-icon {
  @apply h-10 w-10 shrink-0;
}

.skill-name {
  @apply font-display text-xl font-bold leading-tight;
}

.skill-flavor {
  @apply font-primary text-sm text-neutral-500;
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
    tl.from("h2, h3, .skill-card", {
      opacity: 0,
      y: -10,
      duration: 0.75,
      stagger: 0.03,
    });
  }, container.value);
});

onUnmounted(() => ctx?.revert());

const languages = [
  { name: "HTML", flavor: "Technically not a language", icon: "skill-icons:html" },
  { name: "CSS", flavor: "Centering divs since forever", icon: "skill-icons:css" },
  { name: "TypeScript", flavor: "JavaScript that argues back", icon: "skill-icons:typescript" },
  { name: "PHP", flavor: "Still powering 78% of the web", icon: "skill-icons:php-dark" },
  { name: "Python", flavor: "Readable until it's yours", icon: "skill-icons:python-dark" },
  { name: "MySQL", flavor: "Rows and rows of data", icon: "skill-icons:mysql-dark" },
];

const frameworks = [
  { name: "Angular", flavor: "The opinionated framework", icon: "skill-icons:angular-dark" },
  { name: "NextJS", flavor: "React but it does more stuff", icon: "skill-icons:nextjs-dark" },
  { name: "Symfony", flavor: "Where PHP actually makes sense", icon: "logos:symfony" },
  { name: "Flask", flavor: "Minimal until in production", icon: "skill-icons:flask-dark" },
  { name: "RabbitMQ", flavor: "Shouting into a queue, it works", icon: "logos:rabbitmq-icon" },
];

const devTools = [
  { name: "Docker", flavor: "It works on our machine", icon: "skill-icons:docker" },
  { name: "Kibana", flavor: "Retrospective debugging", icon: "logos:kibana" },
  { name: "Grafana", flavor: "Pretty graphs wahoo", icon: "logos:grafana" },
];
</script>
