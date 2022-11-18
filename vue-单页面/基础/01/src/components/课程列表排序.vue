<template>
  <div class="classList">
    <button
      @click="this.orderBy = 'price'"
      :class="{ checked: this.orderBy == 'price' }"
    >
      价格
    </button>
    <button
      @click="this.orderBy = 'comments'"
      :class="{ checked: this.orderBy == 'comments' }"
    >
      评论数
    </button>
    -------
    <button
      @click="this.orderType = 'asc'"
      :class="{ checked: this.orderType == 'asc' }"
    >
      升序
    </button>
    <button
      @click="this.orderType = 'desc'"
      :class="{ checked: this.orderType == 'desc' }"
    >
      降序
    </button>
    <!-- 课程列表 -->
    <div v-for="(lesson, index) in classList" :key="lesson.id">
      <template v-if="!lesson.isdal">
        课程名:{{ lesson.name }}-价格{{ lesson.price }}-评论数{{
          lesson.comments
        }}<br /><br />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lessons: [
        { id: 1, name: "Linux", isdal: false, price: 199, comments: 189 },
        { id: 2, name: "css", isdal: false, price: 100, comments: 28 },
        { id: 3, name: "jsvascript", isdal: false, price: 98, comments: 528 },
      ],
      orderBy: "price",
      orderType: "asc",
    };
  },
  computed: {
    classList: {
      get() {
        return this.lessons.sort((a, b) => {
          return this.orderType === "asc"
            ? a[this.orderBy] - b[this.orderBy]
            : b[this.orderBy] - a[this.orderBy];
        });
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.checked {
  background: red;
  color: white;
}
</style>
