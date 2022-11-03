<template>
  <label>
    <div>{{ name }}</div>
    <input v-model="content" />
  </label>
</template>

<script>
export default {
  props: ["name", "modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {
      content: this.modelValue,
    };
  },
  watch: {
    content(v) {
      this.$emit("update:modelValue", v);
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  display: flex;
  align-items: center;
  div {
    color: #666;
    font-size: 16px;
    margin-right: 10px;
  }
  input {
    border: 1px solid #333;
    outline: none;
    padding: 5px 10px;
  }
}
</style>
