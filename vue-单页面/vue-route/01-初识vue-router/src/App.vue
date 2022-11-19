<template>
  <h1>app</h1>
  <router-link to="/home" active-class="active">首页</router-link>
  <router-link to="/about" active-class="active">关于</router-link>
  <router-link to="/user/123" active-class="active">用户-123</router-link>
  <router-link to="/user/456" active-class="active">用户-456</router-link>
  <router-view></router-view>
</template>

<script setup></script>

<style lang="scss" scoped>
.active {
  font-size: 20px;
  color: red;
  transition: all 0.3s ease;
}
</style>
