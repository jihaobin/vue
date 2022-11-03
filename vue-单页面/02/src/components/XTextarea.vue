<template>
  <label>
    <div>{{ name }}</div>
    <textarea v-model="content" :rows="rows"></textarea>
  </label>
</template>

<script>
export default {
  props: {
    name: String,
    modelValue: String,
    rows: {
      type: Number,
      default: 3,
    },
  },
  emits: ["update:modelValue"],
  inject: {
    pername: {
      from: "name",
    },
  },
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
  margin-bottom: 10px;
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
