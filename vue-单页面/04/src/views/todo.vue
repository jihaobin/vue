<script setup>
//包
//组件
import item from "../components/item.vue";
import add from "../components/add.vue";
import sort from "../components/sort.vue";
//逻辑复用
import useTods from "../composables/todo.js";

const { todos, load } = await useTods();
load();
</script>

<template>
  <div class="from">
    <add />
    <sort />
  </div>

  <div>
    <item v-for="item in todos" :key="item.id" class="item" :todo="item" />
  </div>
</template>

<style lang="scss" scoped>
.from {
  flex-direction: row;
  flex: 1;
}
div {
  display: flex;
  flex-direction: column;
  color: white;
  margin-bottom: 5px;
}
</style>
