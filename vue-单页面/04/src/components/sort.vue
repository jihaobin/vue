<template>
  <div>
    <button @click="order">{{ sortBy == "asc" ? "升序" : "降序" }}</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import useTodo from "../composables/todo";
const { sortBy } = useTodo();
const order = () => {
  sortBy.value = sortBy.value == "asc" ? "desc" : "asc";
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  button {
    flex: 1;
    margin-left: 1em;
    color: white;
    outline: 0;
    border: 0;
    background-color: #16a085;
  }
}
</style>
