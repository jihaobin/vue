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
      <button @click="del">删除</button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
const props = defineProps({
  todo: { type: Object },
});
const emit = defineEmits(["del"]);

const del = async () => {
  await axios({
    url: `http://localhost:3003/news/${props.todo.id}`,
    method: "delete",
  });
  emit("del");
};
</script>

<style lang="scss" scoped>
div {
  display: flex;

  input {
    flex: 1;
    padding: 10px;
  }
}
</style>
