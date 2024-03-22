<template>
  <div
    ref="container"
    class="min-h-screen w-full bg-neutral-900 px-8 py-[200px] text-pampas-100"
  >
    <h1
      class="mx-auto mb-16 w-full max-w-[1440px] font-display text-6xl font-bold"
    >
      These are all my works.
    </h1>
    <div
      class="mx-auto grid w-full max-w-[1440px] grid-cols-12 gap-x-8 gap-y-16"
    >
      <ContentList
        class="contents"
        path="/projects"
        :query="queryContent().find()"
        v-slot="{ list }"
      >
        <NuxtLink
          class="contents"
          v-for="item in list"
          :key="item._path"
          :to="item._path"
        >
          <div
            class="card col-span-3 mx-auto flex aspect-[8/12] h-full w-full max-w-[350px] flex-col overflow-hidden rounded-3xl bg-neutral-800 xl:col-span-4 lg:col-span-6 [@media(max-width:700px)]:col-span-full"
          >
            <div>
              <NuxtImg
                class="aspect-[16/9] h-full w-full object-cover"
                :src="item.thumbnail"
              ></NuxtImg>
            </div>
            <div class="flex h-full flex-col px-4 pb-4 pt-8">
              <h2 class="font-display text-2xl text-indigo-300">
                {{ item.title }}
              </h2>
              <p class="mt-4 text-base opacity-80">{{ item.description }}</p>
              <div class="mt-auto flex flex-wrap gap-1">
                <span
                  class="inline-block text-sm leading-none opacity-40"
                  v-for="tag in item.technologies"
                >
                  #{{ tag }}&nbsp;
                </span>
              </div>
            </div>
          </div>
        </NuxtLink>
      </ContentList>
    </div>
  </div>
</template>

<script setup lang="ts">
const container = ref();
const { setDarkMode } = useNavbar();
onMounted(() => {
  useCursor(".card", container.value);
  setDarkMode(true);
});
onUnmounted(() => {
  setDarkMode(false);
});
</script>

<style scoped>
.card {
  @apply overflow-hidden shadow shadow-pampas-950  duration-300 hover:shadow-pampas-800;
}
</style>
