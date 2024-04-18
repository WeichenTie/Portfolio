<template>
  <ContentDoc v-slot="{ doc }">
    <article class="project-blog-container">
      <BlogImg wrapper-class="aspect-video" :src="doc.thumbnail"></BlogImg>
      <ContentRenderer
        class="project-blog-content"
        :value="doc"
      ></ContentRenderer>
    </article>
  </ContentDoc>
</template>

<script setup lang="ts"></script>

<style>
.project-blog-container {
  @apply mx-auto w-full max-w-[70ch]  bg-inherit px-4 py-24 text-xl;
}
.project-blog-container .thumbnail {
  @apply aspect-[16/10] w-full rounded-3xl object-cover shadow-md;
}
.project-blog-content img {
  @apply rounded-3xl shadow-md;
}
.project-blog-content img {
  @apply mb-4 mt-4 object-cover;
}

.project-blog-content img + p {
  @apply mt-8;
}
.project-blog-content table + p {
  @apply mt-8;
}
.project-blog-content p + p {
  @apply mt-4;
}
.project-blog-content ol + p {
  @apply mt-4;
}
.project-blog-content ul + p {
  @apply mt-4;
}

.project-blog-content a {
  @apply text-rose-700 underline;
}

.project-blog-content table {
  @apply mx-auto mt-8 border-collapse;
}

.project-blog-content table tr > * {
  @apply border-2 border-neutral-800 px-4 py-2;
}

.project-blog-content h1 {
  @apply mt-16 text-6xl font-black text-rose-700;
}
.project-blog-content h2 {
  @apply mb-4 mt-8 text-2xl font-bold;
}
.project-blog-content h3 {
  @apply mb-2 mt-4 font-bold underline;
}
.project-blog-content ul {
  @apply ml-12 mt-4 list-disc space-y-2;
}
.project-blog-content ol {
  @apply ml-12 mt-4 list-decimal space-y-2;
}

.project-blog-content pre {
  @apply my-8 w-full max-w-[70ch] overflow-x-auto text-wrap;
}
.project-blog-content pre code {
  @apply contents;
}
.project-blog-content pre code .line {
  @apply text-nowrap;
}

.project-blog-content pre code .highlighted {
  @apply bg-green-500 bg-opacity-30;
}
</style>
