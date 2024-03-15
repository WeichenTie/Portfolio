<template>
  <div class="blog-double-img flex w-full gap-4">
    <ContentSlot></ContentSlot>
  </div>
</template>
<style>
.blog-double-img + .blog-double-img {
  @apply -mt-16;
}
</style>
