<template>
  <div class="grid-container min-h-screen">
    <div class="mb-8 mt-auto flex h-fit w-full flex-col gap-8">
      <a href="https://github.com/WeichenTie">
        <Icon class="h-16 w-16" name="logos:github-icon" />
      </a>
      <a href="https://www.linkedin.com/in/weichen-tie-bb783020b/"
        ><Icon class="h-16 w-16" name="logos:linkedin-icon"
      /></a>
    </div>
    <h1
      class="col-span-10 flex h-full w-full flex-col items-center justify-center gap-2 font-display text-[160px] font-bold leading-none"
    >
      <span>
        <span>WEICHEN TIE&nbsp;</span>
        <span class="subtext text-orange-400 text-opacity-70"
          >(/weɪ ʧɛn taɪ/)</span
        >
      </span>
      <span class="text-indigo-400">
        <span class="subtext">is a&nbsp;</span>
        <span>SOFTWARE</span>
      </span>
      <span class="text-rose-500">
        <span class="subtext">and&nbsp;</span>
        <span>MECHATRONICS</span>
      </span>
      <span>ENGINEER</span>
    </h1>
    <div class="mb-8 mt-auto flex h-fit w-full items-center justify-end">
      <img src="/images/pointers.svg" alt="arrow" />
      <p class="[text-orientation:mixed] [writing-mode:vertical-rl]">
        Scroll down for more.
      </p>
    </div>
  </div>
</template>

<style scoped>
.subtext {
  @apply text-7xl;
}
.grid-container {
  @apply grid w-full grid-cols-12 gap-x-8 px-8;
}
</style>
