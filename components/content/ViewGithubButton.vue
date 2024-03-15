<template>
  <div ref="button" class="contents">
    <NuxtLink
      class="mr-4 mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-2xl font-semibold text-white"
      :to="to"
      ><Icon name="fa:github"></Icon><span>Github</span></NuxtLink
    >
  </div>
</template>
<script setup lang="ts">
defineProps<{
  to: string;
}>();

const button = ref();
onMounted(() => {
  useCursor(button.value);
});
</script>
