<template>
  <div>
    <span @click="$emit('del', index)">X</span>
    <img :src="lesson.img" />
    <h3 @dblclick="isShow = true">
      课程名称：
      <input
        v-if="isShow"
        type="text"
        :value="lesson.name"
        @input="change"
        @blur="isShow = false"
        @keyup.enter="isShow = false"
        v-focus
      />
      <strong v-else>{{ lesson.name }}</strong>
    </h3>

    <h3 @dblclick="isprice = true">
      价格：
      <input
        v-if="isprice"
        type="text"
        :value="price"
        @input="$emit('update:price', $event.target.value)"
        @blur="isprice = false"
        @keyup.enter="isprice = false"
        v-focus
      />
      <strong v-else>{{ lesson.price }}</strong>
    </h3>
  </div>
</template>

<script>
export default {
  props: ["lesson", "index", "title", "price", "titleModifiers"],
  emits: ["del", "update:title", "update:price"],
  data() {
    return {
      isShow: false,
      isprice: false,
    };
  },
  methods: {
    change(event) {
      let value = event.target.value;
      if (this.titleModifiers.toupper) {
        value = value.toUpperCase();
      }
      this.$emit("update:title", value);
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  text-align: center;
  border: 1px solid #ddd;
  transition: 1s;
  position: relative;
  &:hover {
    box-shadow: 0 0 20px #aaa;
    > span {
      opacity: 1;
    }
  }
  h3 {
    padding: 0 0 20px;
    margin: 0;
  }
  img {
    width: 100%;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10px;
    top: 10px;
    width: 30px;
    height: 30px;
    background: gray;
    color: white;
    border-radius: 100%;
    transition: 0.5s;
    opacity: 0;
  }
}
</style>
