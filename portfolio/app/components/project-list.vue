<template>
  <div>Projects</div>
</template>

<script setup>
console.log(
  await $fetch("https://api.github.com/users/piotr-jura-udemy/repos")
);
</script>
