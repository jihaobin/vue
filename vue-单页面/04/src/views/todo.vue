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

  <div class="todo">
    <transition-group name="todo">
      <item v-for="item in todos" :key="item.id" :todo="item" class="item" />
    </transition-group>
  </div>
</template>

<style lang="scss" scoped>
.todo-leave-to,
.todo-enter-from {
  opacity: 0;
  transform: scale(0);
}
.todo-leave-active {
  transition: all 0.3s ease;
  position: absolute;
}

.todo-move {
  transition: all 0.3s ease;
}

.from {
  display: flex;
  margin-bottom: 10px;
}
todo {
  width: 100%;
  margin-bottom: 20px;
}
</style>
