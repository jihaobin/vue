<template>
  <soltSon v-for="lesson in lessons" :key="lesson.id" :lesson="lesson" v-slot="{ id }">
    <button @click="del(id)">删除</button>
  </soltSon>
</template>

<script>
import soltSon from "./soltSon/soltSon.vue";
export default {
  components: { soltSon },
  data() {
    return {
      lessons: [
        { id: 1, title: "第七章 webpack打包编译Typescript" },
        { id: 2, title: "第一章 Typescript小白入门" },
        { id: 3, title: "laravel 小学篇 - 技术博客（直播回放）" },
      ],
    };
  },
  methods: {
    del(id) {
      let index = this.lessons.findIndex(l => l.id == id)
      this.lessons.splice(index, 1)
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
