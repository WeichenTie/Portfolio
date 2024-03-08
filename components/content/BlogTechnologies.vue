<template>
  <div class="flex w-full flex-wrap gap-x-6 gap-y-4 italic opacity-50">
    <span class="inline" v-for="item in tags">#{{ item }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ tags: string[] }>();
</script>
