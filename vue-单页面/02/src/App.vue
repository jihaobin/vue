<template>
  <div class="root">
    <div
      class="divx"
      v-for="(item, index) of components"
      :key="index"
      :class="{ acitve: item.name == componentId }"
      @click="componentId = item.name"
    >
      {{ item.title }}
    </div>
  </div>
  <component :is="componentId"></component>
  <input v-model="name" />
  {{ name }}
</template>

<script>
import wx from "./components/wx.vue";
import zhifu from "./components/zhifu.vue";
import { computed } from "vue";
export default {
  components: { wx, zhifu },
  provide() {
    return {
      name: computed(() => this.name),
    };
  },
  data() {
    return {
      name: "Tom",
      componentId: "wx",
      components: [
        { title: "微信", name: "wx" },
        { title: "支付宝", name: "zhifu" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.root {
  display: flex;
  .divx {
    width: 100px;
    height: 100px;
    margin: 10px;
    border: 1px solid black;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .acitve {
    background: lightgreen;
  }
}
</style>
