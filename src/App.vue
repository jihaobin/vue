<template>
  <h1>app</h1>
  <router-link to="/home" active-class="active">首页</router-link>
  <router-link to="/about" active-class="active">关于</router-link>
  <router-link to="/user/123" active-class="active">用户-123</router-link>
  <router-link to="/user/456" active-class="active">用户-456</router-link>
  <router-link to="/order" active-class="active">订单</router-link>
  <router-link to="/home/1" active-class="active">1</router-link>
  <router-link to="/home/2" active-class="active">2</router-link>

  <button @click="routerhome">首页</button>
  <button @click="routerabout">关于</button>

  <router-view></router-view>
</template>

<script setup>
import { useRoute } from "vue-router";
import router from "./router";

const routerhome = () => {
  router.push({ name: "home" });
};

const routerabout = () => {
  router.push({ name: "about" });
};
</script>

<style lang="scss" scoped>
.active {
  font-size: 20px;
  color: red;
  transition: all 0.3s ease;
}
</style>
