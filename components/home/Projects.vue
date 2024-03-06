<script setup lang="ts">
const projectsQuery = queryContent("projects");
const projects = await projectsQuery.where({ showcased: true }).find();
const projectsLeft = projects.filter((_, i) => {
  return i % 2 === 0;
});
const projectsRight = projects.filter((_, i) => {
  return i % 2 !== 0;
});
</script>

<template>
  <div class="container text-pampas-100">
    <div class="container-inner-wrapper">
      <h2 class="col-span-full col-start-2 mt-auto font-display font-bold">
        Works I'm <span class="text-rose-500">proud</span> of.
      </h2>

      <div class="project-container-wrapper">
        <div class="project-container project-container-left">
          <div v-for="item in projectsLeft" class="project-card">
            <NuxtImg
              fit="cover"
              class="w-full object-cover"
              format="webp"
              :src="item.thumbnail"
            ></NuxtImg>
            <div>
              <h3 class="text-3xl">{{ item.title }}</h3>
              <span
                class="inline-block text-lg opacity-40"
                v-for="tag in item.tags"
                >#{{ tag }}&nbsp;</span
              >
            </div>
          </div>
        </div>
        <div class="project-container project-container-right">
          <div v-for="item in projectsRight" class="project-card">
            <NuxtImg
              fit="cover"
              class="w-full object-cover"
              format="webp"
              :src="item.thumbnail"
            ></NuxtImg>
            <div>
              <h3 class="text-3xl">{{ item.title }}</h3>
              <span
                class="inline-block text-lg opacity-40"
                v-for="tag in item.tags"
                >#{{ tag }}&nbsp;</span
              >
            </div>
          </div>
          <NuxtLink class="view-all-card" to="/projects"
            >View More Projects</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  @apply rounded-t-[4rem] bg-neutral-900 px-8 py-[200px];
}

.container-inner-wrapper {
  @apply mx-auto w-full max-w-[1200px];
}

.project-container {
  @apply flex w-full flex-col gap-y-16;
}

.project-card {
  @apply flex flex-col gap-12;
}

.project-card img {
  @apply overflow-hidden rounded-[4rem];
}

.project-container-left .project-card:nth-of-type(1) img {
  @apply aspect-[5/6.5];
}
.project-container-left .project-card:nth-of-type(2) img {
  @apply aspect-[5/5];
}
.project-container-left .project-card:nth-of-type(3) img {
  @apply aspect-[5/6.5];
}
.project-container-left .project-card:nth-of-type(4) img {
  @apply aspect-[5/5];
}
.project-container-right .project-card:nth-of-type(1) {
  @apply mt-[50%];
}
.project-container-right .project-card:nth-of-type(1) img {
  @apply aspect-[5/5];
}
.project-container-right .project-card:nth-of-type(2) img {
  @apply aspect-[5/6];
}
.project-container-right .project-card:nth-of-type(3) img {
  @apply aspect-[5/5];
}

.view-all-card {
  @apply flex w-full flex-1 items-center justify-center;
}

.project-container-wrapper {
  @apply col-span-full mt-32 grid grid-cols-2 gap-x-16;
}
</style>
