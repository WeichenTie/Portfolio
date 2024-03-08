<template>
    <iframe
        v-bind="$attrs"
        class="mx-auto my-8 aspect-video w-full rounded-3xl "
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
    ></iframe>
  </template>