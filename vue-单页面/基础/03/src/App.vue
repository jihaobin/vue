<template>
  <div>
    <!-- <compostive :init="1" @change="change" ref="test">
      <p>123</p>
      <p>321</p>
    </compostive> -->
    <button @click="change">{{ hd }}</button>
  </div>
</template>

<script>
import compostive from "./components/compostive.vue";
import { ref, reactive, toRefs } from "vue";
export default {
  components: { compostive },
  setup() {
    let content = ref(3);
    let test = ref();
    const change = (v) => {
      content.value = v;
    };
    return { content, change, test };
  },
};
</script>

<style lang="scss" scoped></style>
