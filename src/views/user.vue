<template>
  <h1>User{{ $route.params.id }}</h1>
</template>

<script setup>
import { useRoute, onBeforeRouteUpdate } from "vue-router";
onBeforeRouteUpdate((to, from) => {
  console.log(to.params.id);
});
</script>

<style lang="scss" scoped></style>
