<template>
  <div>
    <component :is="defaults[0]"></component>
    <button @click="pre">-</button>
    {{ content }}
    <button @click="add">+</button>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
  props: ["init"],
  emits: ["change"],
  setup(props, { emit, expose, slots }) {
    let content = ref(props.init);
    const defaults = slots.default();
    function add() {
      content.value++;
      emit("change", content.value);
    }
    function pre() {
      content.value--;
      emit("change", content.value);
    }
    watchEffect(() => {
      content.value < 0 ? (content.value = 0) : "";
      emit("change", content.value);
    });
    console.log();

    expose({ content });
    return { content, add, pre, defaults };
  },
};
</script>

<style lang="scss" scoped></style>
