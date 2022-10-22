<template>
  <div class="classList">
    <div v-for="(lesson, index) in classlist">
      <div v-if="lesson.isdal">{{ lesson.name }}--{{ index }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classlist: [
        { name: "课程1", isdal: false },
        { name: "课程2", isdal: true },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.classList {
  div {
    display: flex;
    justify-content: space-between;
    & .active {
      text-decoration: line-through;
    }
  }
}
</style>
