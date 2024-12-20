<template>
  <div class="container mx-auto max-w-2xl">
    <header class="flex justify-between items-center mt-5">
      <div>
        <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200"
          >Home</NuxtLink
        >
      </div>
      <Menu />
      <slot name="header" />
    </header>
    <main class="p-4 mt-10">
      <slot />
    </main>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: "%s -- My Personal Website",
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
      crossorigin: "",
    },
  ],
});
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}
</style>
