<script setup>
//包

//组件
import item from "../components/item.vue";
import add from "../components/add.vue";
import sort from "../components/sort.vue";
import AnimateList from "../components/AnimateList.vue";
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

  <div class="todo">
    <animate-list>
      <item
        v-for="(item, index) in todos"
        :key="item.id"
        :todo="item"
        class="item"
        :index="index"
      />
    </animate-list>
  </div>
</template>

<style lang="scss">
.from {
  display: flex;
  margin-bottom: 10px;
}
.todo {
  width: 100%;
  margin-bottom: 20px;
}
</style>
