<script lang="ts" setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const cursor = ref<HTMLElement>();
let animationFrame: number;
const hide = ref(true);
const hoverState = useState("cursorState", () => null);
const mousePos: { x?: number; y?: number } = { x: undefined, y: undefined };
const route = useRoute();

watch(
  () => route.fullPath,
  () => {
    hoverState.value = null;
  },
);

function onMouseMove(e: MouseEvent) {
  if (hide.value) {
    hide.value = false;
    gsap.set(cursor.value!, {
      x: e.x,
      y: e.y,
    });
    gsap.from(cursor.value!, {
      opacity: 0,
      scale: 0,
    });
  }
  mousePos.x = e.x;
  mousePos.y = e.y;
}

onMounted(() => {
  window.addEventListener("mousemove", onMouseMove);
  function onFrame(time: number) {
    if (!hide.value) {
      const circleBounds = cursor.value?.getBoundingClientRect() || {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      };
      const circleCenter = {
        x: circleBounds!.x + circleBounds!.width / 2,
        y: circleBounds!.y + circleBounds!.height / 2,
      };
      gsap.to(cursor.value!!, {
        overwrite: "auto",
        duration: 0.5,
        x: function () {
          const x = gsap.getProperty(cursor.value!!, "x") as number;
          const dx = mousePos.x! - circleCenter.x;
          return x + dx;
        },
        y: function () {
          const y = gsap.getProperty(cursor.value!!, "y") as number;
          const dy = mousePos.y! - circleCenter.y;
          return y + dy;
        },
      });
    }
    animationFrame = requestAnimationFrame(onFrame);
  }
  animationFrame = requestAnimationFrame(onFrame);
});

watch(hoverState, (state, prevState) => {
  if (state !== null) {
    gsap.to(cursor.value!, {
      ease: "power2.out",
      duration: 0.5,
      scale: 5,
    });
  } else {
    gsap.to(cursor.value!, {
      ease: "power2.out",
      duration: 0.5,
      scale: 1,
    });
  }
});

onUnmounted(() => {
  window.removeEventListener("mousemove", onMouseMove);
  cancelAnimationFrame(animationFrame);
});
</script>

<template>
  <div
    :class="[{ 'opacity-0': hide }]"
    ref="cursor"
    class="cursor"
    :expanded="hoverState !== null"
  ></div>
</template>

<style>
.cursor {
  @apply pointer-events-none fixed z-50 flex aspect-square w-[1vw] items-center justify-center rounded-full border-[2px] border-white bg-white bg-opacity-0 mix-blend-difference;
}
</style>
