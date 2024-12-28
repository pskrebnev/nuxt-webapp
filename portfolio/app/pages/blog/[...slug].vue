<template>
  <div>We are inside the blog!</div>
  <article class="prose">
    <ContentDoc />
  </article>
</template>

<script setup>
const route = useRoute();
console.log(route.params.slug);
</script>
