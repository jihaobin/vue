<template>
  <div>
    <span @click="$emit('del', index)">X</span>
    <img :src="lesson.img" />
    <h3>{{ lesson.name }}</h3>
  </div>
</template>

<script>
export default {
  props: ["lesson", "index"],
  emits: ["del"],
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
