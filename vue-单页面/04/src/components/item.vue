<script>
// 使用普通的 <script> 来声明选项
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div>
    <div>
      <input type="text" :value="todo.title" />
      <button @click="del(todo.id)">删除</button>
    </div>
  </div>
</template>

<script setup>
import myAxios from "../http/user/user";

import useTods from "../composables/todo.js";
import user from "../http/user/user";

const { del } = useTods();

const props = defineProps({
  todo: { type: Object },
});
</script>

<style lang="scss" scoped>
div {
  display: flex;
  margin-bottom: 5px;
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
</style>
