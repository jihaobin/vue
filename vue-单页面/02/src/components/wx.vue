<template>
  <card>
    <template #header> 微信支付 </template>
    <template #main>
      <x-input name="微信号" v-model="appname" />
    </template>
  </card>
  {{ appname }}
</template>

<script>
export default {
  data() {
    return {
      appname: "jack",
    };
  },
};
</script>

<style lang="scss" scoped></style>
