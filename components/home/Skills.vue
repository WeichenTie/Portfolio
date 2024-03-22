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
        <h3>Programming Languages.</h3>
        <div class="flex flex-wrap gap-8">
          <div v-for="item in languages" class="icon">
            <Icon
              class="icon h-24 w-24 rounded-3xl bg-[#242938]"
              :name="item.icon"
            ></Icon>
          </div>
        </div>
      </div>
      <div class="skillset-wrapper">
        <h3>Frameworks and libraries.</h3>
        <div class="flex flex-wrap gap-8">
          <div v-for="item in frameworks" class="icon">
            <Icon
              class="icon h-24 w-24 rounded-3xl bg-[#242938]"
              :name="item.icon"
            ></Icon>
          </div>
        </div>
      </div>
      <div class="skillset-wrapper">
        <h3>Additional skills.</h3>
        <div class="flex flex-wrap gap-8">
          <div v-for="item in soft_hardware" class="icon">
            <Icon
              class="icon h-24 w-24 rounded-3xl bg-[#242938] text-orange-500"
              :name="item.icon"
            ></Icon>
          </div>
        </div>
      </div>
      <div class="skillset-wrapper">
        <h3>Spoken Languages.</h3>
        <div class="flex flex-wrap gap-8">
          <div v-for="item in spokenLanguages" class="icon">
            <Icon class="h-24 w-24 bg-[#f4f2ed]" :name="item.icon"></Icon>
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
</style>

<script lang="ts" setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let ctx: gsap.Context;
const container = ref();
onMounted(() => {
  ctx = gsap.context((self) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.value,
        start: "35% bottom",
      },
    });
    tl.from("h2, h3, .icon", {
      opacity: 0,
      y: -10,
      duration: 0.75,
      stagger: 0.03,
    }).to;
  }, container.value);
});

const languages = [
  { name: "Html", icon: "skill-icons:html" },
  { name: "Css-3", icon: "skill-icons:css" },
  { name: "Javascript", icon: "skill-icons:javascript" },
  { name: "Typescript", icon: "skill-icons:typescript" },
  { name: "Sass", icon: "skill-icons:sass" },
  { name: "C", icon: "skill-icons:c" },
  { name: "C-Sharp", icon: "skill-icons:cs" },
  { name: "Cpp", icon: "skill-icons:cpp" },
  { name: "Java", icon: "skill-icons:java-dark" },
  { name: "Python", icon: "skill-icons:python-dark" },
];
const frameworks = [
  { name: "Nextjs", icon: "skill-icons:nextjs-dark" },
  { name: "Nuxt", icon: "skill-icons:nuxtjs-dark" },
  { name: "React", icon: "skill-icons:react-dark" },
  { name: "Vue", icon: "skill-icons:vuejs-dark" },
  { name: "Svelte", icon: "skill-icons:svelte" },
  { name: "Tailwind", icon: "skill-icons:tailwindcss-dark" },
  { name: "Opengl", icon: "logos:opengl" },
  { name: "Django", icon: "skill-icons:django" },
  { name: "dotNet", icon: "skill-icons:dotnet" },
  { name: "Flask", icon: "skill-icons:flask-dark" },
  { name: "NodeJs", icon: "skill-icons:nodejs-dark" },
  { name: "Postgres", icon: "skill-icons:postgresql-dark" },
  { name: "Unity", icon: "skill-icons:unity-dark" },
  { name: "Unreal", icon: "skill-icons:unrealengine" },
];
const soft_hardware = [
  { name: "Figma", icon: "skill-icons:figma-dark" },
  { name: "Git", icon: "skill-icons:git" },
  { name: "raspberrypi", icon: "skill-icons:raspberrypi-dark" },
  { name: "Arduino", icon: "skill-icons:arduino" },
  { name: "Fusion360", icon: "Fusion360Icon" },
  { name: "Prusa", icon: "PrusaSlicerIcon" },
  { name: "3D Printing", icon: "cbi:3dprinter-printing" },
  { name: "Electronics", icon: "flat-color-icons:electronics" },
];

const spokenLanguages = [
  { name: "English", icon: "flagpack:au" },
  { name: "Mandarin", icon: "flagpack:cn" },
];
</script>
