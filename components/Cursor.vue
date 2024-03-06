<template>
  <div
    ref="circle"
    class="pointer-events-none fixed z-50 aspect-square w-12 rounded-full border-2 mix-blend-difference"
  ></div>
</template>
<script lang="ts" setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const circle = ref<HTMLElement>();
let animationFrame: number;
let ctx: gsap.Context;
const mousePos: { x?: number; y?: number } = { x: undefined, y: undefined };
function onMouseMove(e: MouseEvent) {
  mousePos.x = e.x;
  mousePos.y = e.y;
}

onMounted(() => {
  window.addEventListener("mousemove", onMouseMove);
  ctx = gsap.context((self) => {
    function onFrame(time: number) {
      const circleBounds = circle.value?.getBoundingClientRect() || {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      };
      const circleCenter = {
        x: circleBounds!.x + circleBounds!.width / 2,
        y: circleBounds!.y + circleBounds!.height / 2,
      };
      gsap.to(circle.value!!, {
        overwrite: "auto",
        duration: 1,
        x: function () {
          const x = gsap.getProperty(circle.value!!, "x") as number;
          const dx = mousePos.x !== undefined ? mousePos.x - circleCenter.x : 0;
          return x + dx;
        },
        y: function () {
          const y = gsap.getProperty(circle.value!!, "y") as number;
          const dy = mousePos.y !== undefined ? mousePos.y - circleCenter.y : 0;
          return y + dy;
        },
      });
      animationFrame = requestAnimationFrame(onFrame);
    }
    animationFrame = requestAnimationFrame(onFrame);
  });
});

onUnmounted(() => {
  window.removeEventListener("mousemove", onMouseMove);
  cancelAnimationFrame(animationFrame);
  ctx.revert();
});
</script>
