<template>
  <div>
    <Suspense>
      <todo />
      <template #fallback> <div>loding...</div> </template>
    </Suspense>
  </div>
</template>

<script setup>
import todo from "./views/todo.vue";
</script>

<style lang="scss" scoped>
div {
  color: white;
}
</style>
