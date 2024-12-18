<template>
  <div>
    <nav>
      <li>
        <NuxtLink to="/">Main Page</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About Page</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog">My blog Page</NuxtLink>
      </li>
    </nav>
    <div>This is another layout</div>
    <slot />
  </div>
</template>
