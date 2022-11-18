<template>
  <card>
    <template #header> 微信支付 </template>
    <template #main>
      <x-input name="微信号" v-model="appname" />
      <x-textarea name="意见提交区" v-model="text" />
    </template>
  </card>
</template>

<script>
export default {
  data() {
    return {
      appname: "jack",
      text: "牛逼",
    };
  },
  methods: {
    show() {
      console.log(1);
    },
  },
};
</script>

<style lang="scss" scoped></style>
