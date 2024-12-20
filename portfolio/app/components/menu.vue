<template>
  <nav class="font-mono">
    <ul class="flex space-x-4">
      <li>
        <NuxtLink to="/" class="link">Main Page</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" class="link">About Page</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog" class="link">My blog Page</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects" class="link">My projects Page</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.link {
  color: #145c49;
  @apply p-1 hover:bg-gray-200;
}
</style>
