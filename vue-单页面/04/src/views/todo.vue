<script setup>
//包
import { ref } from "vue";
import axios from "axios";
//组件
import item from "../components/item.vue";

//工具函数
import myAxios from "../http/user/user";

const todos = ref({});
todos.value = await myAxios.get();
async function del() {
  todos.value = await myAxios.get();
}
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
