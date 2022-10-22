<template>
  <div>
    <ul>
      <a href="#" :class="{ active: istrue }">1212</a>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      istrue: false,
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  ul {
    .active {
      text-decoration: none;
    }
  }
}
</style>
