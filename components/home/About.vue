<script setup lang="ts">
import { gsap } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let ctx: gsap.Context;

const container = ref<HTMLElement>();
const c1 = ref<HTMLElement>();
const c2 = ref<HTMLElement>();
const c3 = ref<HTMLElement>();

onMounted(() => {
  useCursor(".btn-group > *", container.value);
  SplitType.create(".splt", { types: "words,chars" });

  ctx = gsap.context((self) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.value,
        start: "50% bottom",
      },
    });
    tl.from(
      c1.value!,
      {
        duration: 0.75,
        rotate: 20,
        y: -550,
        opacity: 0,
      },
      0,
    );
    tl.from(
      c2.value!,
      {
        duration: 0.75,
        rotate: 20,
        y: -450,
        opacity: 0,
      },
      0.2,
    );
    tl.from(
      c3.value!,
      {
        duration: 0.75,
        rotate: -20,
        y: -350,
        opacity: 0,
      },
      0.4,
    );
    tl.from(
      "h2",
      {
        duration: 0.75,
        y: 50,
        opacity: 0,
      },
      0,
    );

    tl.from(
      ".char",
      {
        opacity: 0,
        y: "20%",
        duration: 1,
        stagger: 0.0075,
      },
      0,
    );
    tl.from(
      ".btn-group",
      {
        duration: 1,
        opacity: 0,
      },
      "-=0.75",
    );
  }, container.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <div
    ref="container"
    id="about"
    class="outer-container flex min-h-[max(100vh,1200px)] items-center justify-center px-8"
  >
    <div class="grid max-w-[1440px] grid-cols-2">
      <div class="lg:col-span-2">
        <h2 class="text-6xl font-black">
          A <span class="text-teal-500">slice</span> of me.
        </h2>
        <p class="splt mt-8">
          At Freelancer.com I work on the Innovation Challenges platform used by
          NASA, NIH and Honda for prize competitions of up to $6M. I've built
          parts of the judging workflows, helped migrate over two million PayPal
          billing agreements with zero downtime, and built a tool that runs AI
          code reviews in parallel.
        </p>
        <p class="splt mt-8">
          I studied Computer Science and Mechatronic Engineering at UNSW, where
          I was IT Director of the Robotics and Mechatronics Society (RAMSoc).
        </p>
        <p class="splt mt-8">
          Outside work I like building things that sit between software and
          hardware, like GPU simulations, embedded systems and a graphics card I
          made on breadboards.
        </p>
        <p class="splt mt-8">
          If that sounds like what you need, let's get in touch!
        </p>
        <div class="btn-group xs:gap-4 mt-8 flex justify-end gap-6 sm:flex-col">
          <NuxtLink to="/#contact" class="btn-primary"> CONTACT ME </NuxtLink>
        </div>
      </div>
      <div class="relative flex items-center justify-center lg:hidden">
        <div
          ref="c1"
          class="absolute top-1/2 aspect-[45/35] w-[70%] max-w-[450px] -translate-y-[100%] -rotate-6 overflow-hidden rounded-3xl bg-red-800"
        >
          <NuxtImg
            :width="450"
            :height="350"
            fit="cover"
            src="/images/about/2.webp"
            placeholder
          />
        </div>
        <div
          ref="c2"
          class="absolute top-1/2 aspect-[45/35] w-[70%] max-w-[450px] -translate-y-[45%] rotate-6 overflow-hidden rounded-3xl bg-green-800"
        >
          <NuxtImg
            :width="450"
            :height="350"
            fit="cover"
            src="/images/about/1.webp"
            placeholder
          />
        </div>
        <div
          ref="c3"
          class="absolute top-1/2 aspect-[45/35] w-[70%] max-w-[450px] -translate-y-[-10%] -rotate-6 overflow-hidden rounded-3xl bg-neutral-800"
        >
          <NuxtImg
            :width="450"
            :height="350"
            fit="cover"
            src="/images/about/3.webp"
            placeholder
          />
        </div>
      </div>
    </div>
  </div>
</template>
