<template>
  <card>
    <template #header> 支付宝 </template>
    <template #main>
      <x-input name="支付宝账号" v-model="appname" />
    </template>
  </card>
</template>

<script>
export default {
  data() {
    return {
      appname: "tom",
    };
  },
};
</script>

<style lang="scss" scoped></style>
