<template>
  <ContentDoc class="project-blog-container"> </ContentDoc>
</template>

<script setup lang="ts"></script>

<style>
.project-blog-container {
  @apply mx-auto w-full max-w-[60ch] px-4 py-24 text-2xl;
}
.project-blog-container .thumbnail {
  @apply aspect-[16/10] w-full rounded-3xl object-cover shadow-md;
}
.project-blog-container > img {
  @apply rounded-3xl shadow-md;
}
.project-blog-container > img {
  @apply mb-8 mt-4 object-cover;
}
.project-blog-container > img + p {
  @apply mt-8;
}
.project-blog-container > p + p {
  @apply mt-4;
}
.project-blog-container > ol + p {
  @apply mt-4;
}
.project-blog-container > ul + p {
  @apply mt-4;
}
.project-blog-container > h1 {
  @apply mt-16 text-6xl font-black text-rose-700;
}
.project-blog-container > h2 {
  @apply mb-4 mt-8 font-bold;
}
.project-blog-container > h3 {
  @apply mb-2 mt-4 font-bold underline;
}
.project-blog-container > ul {
  @apply ml-12 mt-4 list-disc space-y-2;
}
.project-blog-container > ol {
  @apply ml-12 mt-4 list-decimal space-y-2;
}

.project-blog-container > code > span {
  @apply bg-black;
}
</style>
