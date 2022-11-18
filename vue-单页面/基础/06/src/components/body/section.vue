<template>
  <div class="item">
    <div v-for="item of list" :key="item.id">
      <show
        :img="item.picture_url"
        :name="item.name"
        :price="item.price_format"
        :content="item.bottom_info.content"
        :message="item.verify_info.messages.join()"
        :color="item.verify_info.text_color"
      ></show>
    </div>
  </div>
</template>

<script setup>
import show from "./show.vue";
const props = defineProps(["highScore"]);
const { list } = props.highScore;
console.log(list.verify_info);
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-wrap: wrap;
}
</style>
