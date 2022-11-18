<template>
  <div class="content">
    <img :src="props.img" />
    <div class="title" :style="{ color: color }">{{ message }}</div>
    <div class="name">{{ name }}</div>
    <div class="price">{{ price }}/晚</div>
    <div class="content">{{ content }}</div>
  </div>
</template>

<script setup>
const props = defineProps([
  "img",
  "name",
  "price",
  "content",
  "message",
  "color",
]);
</script>

<style lang="scss" scoped>
.content {
  width: 200px;
  margin: 0px 10px;
  img {
    width: 100%;
  }
  .title {
    font-size: 12px;
  }
}
</style>
