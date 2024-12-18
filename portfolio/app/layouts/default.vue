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
    <main class="p-4">
      <slot />
    </main>
  </div>
</template>
