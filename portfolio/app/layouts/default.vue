<template>
  <div class="container mx-auto max-w-2xl">
    <header class="flex justify-between items-center mt-5">
      <div>
        <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200"
          >Home</NuxtLink
        >
      </div>
      <nav class="font-mono">
        <ul class="flex space-x-4">
          <li>
            <NuxtLink to="/">Main Page</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About Page</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog">My blog Page</NuxtLink>
          </li>
        </ul>
      </nav>
      <slot name="header" />
    </header>
    <main class="p-4">
      <slot />
    </main>
  </div>
</template>
