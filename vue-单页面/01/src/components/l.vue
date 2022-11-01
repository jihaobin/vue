<script>
import { toNumber } from "@vue/shared";
import lesson from "./lesson/lessonSon.vue";
import myinput from "./lesson/myinput.vue";
import modelMyinput from "./lesson/v-model-myinput.vue";
export default {
  components: { lesson, myinput, modelMyinput },
  data() {
    return {
      lessons: [
        { id: 1, name: "JAVASCRIPT", img: "/js.png", price: 197 },
        { id: 2, name: "VUE", img: "/vue3.jpg", price: 200 },
        { id: 3, name: "TAPESCRIPT", img: "/ts.jpg", price: 150 },
      ],
      title: "hello",
    };
  },
  methods: {
    del(index) {
      this.lessons.splice(index, 1);
    },
    change(v) {
      //传递给子组件的事件
      //使用v-model绑定时可以删除
      this.title = v;
    },
  },
  computed: {
    sum() {
      let tempSum = 0;
      for (const _ of this.lessons) {
        tempSum += Number(_.price);
      }
      return Number(tempSum);
    },
  },
};
</script>

<template>
  <div class="lesson">
    <lesson
      v-for="(item, index) in lessons"
      :lesson="item"
      :key="item.id"
      v-model:title.toupper="item.name"
      v-model:price="item.price"
      @del="del"
    />
    {{ sum }}
  </div>
  <!-- v-model父组件{{ title }} <model-myinput v-model:title="title" />

  v-model父组件{{ title }} <model-myinput v-model:title="title" />

  v-model父组件{{ title }} <myinput :value="title" @updata="change" />

  v-model父组件{{ title }}<myinput :value="title" @updata="change" />
  传递事件 -->
</template>

<style lang="scss">
.lesson {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
}
</style>
