<template>
  <div ref="container" class="outer-container flex px-8 pb-[40vh]" id="contact">
    <div class="mx-auto flex h-full w-full max-w-[1440px] flex-col">
      <h2 class="col-span-2 my-24 text-6xl font-black">
        <span class="text-rose-600">Interested?</span> Lets talk.
      </h2>
      <div
        class="col-span-2 grid w-full grid-cols-4 gap-8 2xl:gap-6 xl:grid-cols-2 sm:grid-cols-1"
      >
        <button
          @click="onEmailButtonClick"
          class="card-container flex aspect-[3/2] flex-col items-center overflow-hidden rounded-2xl"
        >
          <Icon class="mt-4 h-20 w-20" name="formkit:email" />
          <p class="mt-2 text-2xl font-bold">Email</p>
          <p class="mb-auto mt-auto text-2xl">weichentie1@gmail.com</p>
        </button>
        <a
          href="tel:+61426893866"
          class="card-container flex aspect-[3/2] flex-col items-center overflow-hidden rounded-2xl"
        >
          <Icon class="mt-4 h-20 w-20" name="bi:phone" />
          <p class="mt-2 text-2xl font-bold">Mobile</p>
          <p class="mb-auto mt-auto text-2xl">+61 426-893-866</p>
        </a>
        <a
          href="https://github.com/WeichenTie"
          class="card-container flex aspect-[3/2] flex-col items-center overflow-hidden rounded-2xl"
        >
          <Icon class="mt-4 h-20 w-20" name="logos:github-icon" />
          <p class="mt-2 text-2xl font-bold">Github</p>
          <p class="mb-auto mt-auto text-2xl">github.com/WeichenTie</p>
        </a>
        <a
          href="https://www.linkedin.com/in/weichentie/"
          class="card-container flex aspect-[3/2] flex-col items-center overflow-hidden rounded-2xl"
        >
          <Icon class="mt-4 h-20 w-20" name="logos:linkedin-icon" />
          <p class="mt-2 text-2xl font-bold">LinkedIn</p>
          <p class="mb-auto mt-auto text-2xl">linkedin.com/in/weichentie</p>
        </a>
      </div>
    </div>
  </div>
</template>
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
    tl.from("h2", {
      opacity: 0,
      y: -10,
      duration: 0.75,
    });
    tl.from(
      ".card-container",
      {
        opacity: 0,
        y: -10,
        duration: 0.75,
        stagger: 0.2,
      },
      0.5,
    );
  }, container.value);
});
async function writeClipboardText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error: any) {
    console.error(error.message);
  }
}

function onEmailButtonClick() {
  writeClipboardText("weichentie1@gmail.com");
}
</script>
