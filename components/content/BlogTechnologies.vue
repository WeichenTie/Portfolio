<template>
    <div class="w-full flex gap-x-6 gap-y-4 flex-wrap opacity-50 italic">
        <p class="inline" v-for="item in tags">#{{item}}</p>
    </div>
</template>

<script setup lang="ts">
    defineProps<{tags: string[]}>()
</script>