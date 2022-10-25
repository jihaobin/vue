<script>
import lesson from "./lesson/lessonSon.vue";
export default {
  components: { lesson },
  data() {
    return {
      lessons: [
        { id: 1, name: "javascript", img: "/js.png" },
        { id: 2, name: "vue", img: "/vue3.jpg" },
        { id: 3, name: "tapescript", img: "/ts.jpg" },
      ],
    };
  },
  methods: {
    del(index) {
      this.lessons.splice(index, 1);
    },
  },
};
</script>

<template>
  <div class="lesson">
    <lesson
      v-for="(item, index) in lessons"
      :lesson="item"
      :index="index"
      :key="item.id"
      @del="del"
    />
  </div>
</template>

<style lang="scss">
.lesson {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
}
</style>
