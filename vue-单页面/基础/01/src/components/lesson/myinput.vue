<template>
  <div>
    <input type="text" :value="content" @input="change" />
    子组件{{ content }}
  </div>
</template>

<script>
export default {
  props: ["value"],
  emits: ["updata"], //接受父组件传递的事件
  data() {
    return {
      //防止直接改变prop的值
      content: this.value,
    };
  },
  methods: {
    change(event) {
      //执行父组件传递的事件,并将改变后的prop传递给父组件
      this.content = event.target.value;
      this.$emit("updata", this.content);
    },
  },
};
</script>

<style lang="scss" scoped></style>
