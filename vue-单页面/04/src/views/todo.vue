<script setup>
//包
import { ref } from "vue";
import axios from "axios";
//组件
import item from "../components/item.vue";

const todos = ref({});
todos.value = await axios.get("http://localhost:3003/news").then((r) => r.data);
const del = async () => {
  todos.value = await axios
    .get("http://localhost:3003/news")
    .then((r) => r.data);
};
</script>

<template>
  <div>
    <item
      v-for="item in todos"
      @del="del"
      :key="item.id"
      class="item"
      :todo="item"
    />
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  color: white;
  .item {
    margin-bottom: 10px;
  }
}
</style>
