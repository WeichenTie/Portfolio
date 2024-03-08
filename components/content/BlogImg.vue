<template>
    <div :class="`${wrapperClass ?? ''} flex-1 rounded-3xl overflow-hidden my-8`">
    
    <NuxtImg v-bind="$attrs" class="object-cover w-full h-full"><slot></slot></NuxtImg>
    </div>
</template>

<script setup lang="ts">
    defineProps<{wrapperClass?: string}>()
</script>