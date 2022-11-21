<template>
  <h1>登录页面</h1>
  <button @click="login">登录</button>
</template>

<script setup>
import { useRouter } from "vue-router";
const route = useRouter();
const login = () => {
  localStorage.setItem("token", "codewhy");
  route.push("/home");
};
</script>

<style lang="scss" scoped></style>
