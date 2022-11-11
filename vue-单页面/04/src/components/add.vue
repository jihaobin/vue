<template>
  <div>
    <input
      type="text"
      v-model="title"
      @keyup.enter="onSubmint"
      placeholder="请按回车确认"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import useTodo from "../composables/todo";
const { post } = useTodo();
const title = ref("");
const onSubmint = () => {
  post({ title: title.value });
};
</script>

<style lang="scss" scoped>
div {
  flex: 1;
  input {
    flex: 1;
    border: 7px solid #16a085;
    padding: 5px;
    outline: 0;
  }
}
</style>
