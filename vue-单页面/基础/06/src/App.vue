<template>
  <div class="app">
    <area-header>
      <template #title>
        {{ highScore.title }}
      </template>
      <template #subtitle>
        {{ highScore.subtitle }}
      </template>
    </area-header>
    <areaSection :highScore="highScore" class="body"></areaSection>
  </div>
</template>

<script setup>
import highScore from "./data/high_score.json";
import areaHeader from "./components/header/header.vue";
import areaSection from "./components/body/section.vue";
</script>

<style lang="scss" scoped>
.body {
  width: 50vw;
}
</style>
