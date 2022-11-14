<script>
// 使用普通的 <script> 来声明选项
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div class="root" :data-index="index">
    <div class="item">
      <input type="text" :value="todo.title" />
      <button @click="del(todo.id)">删除</button>
    </div>
  </div>
</template>

<script setup>
import useTods from "../composables/todo.js";

const { del } = useTods();

const props = defineProps({
  todo: { type: Object },
  index: { type: Number },
});
</script>

<style lang="scss">
.root {
  position: relative;
  width: 100%;
  .item {
    display: flex;
    margin-bottom: 10px;

    input {
      flex: 1;
      padding: 10px;
    }

    button {
      margin-left: 1em;
      color: white;
      outline: 0;
      border: 0;
      background-color: #d35400;
    }
  }
}
</style>
