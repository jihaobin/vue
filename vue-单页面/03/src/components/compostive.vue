<template>
  <div>
    <button @click="pre">-</button>
    {{ content }}
    <button @click="add">+</button>
  </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
  setup(props) {
    let content = ref(0);

    function add() {
      content.value++;
    }
    function pre() {
      content.value--;
    }

    watch(content, (v) => {
      v < 0 ? (content.value = 0) : "";
    });

    return { content, add, pre };
  },
};
</script>

<style lang="scss" scoped></style>
