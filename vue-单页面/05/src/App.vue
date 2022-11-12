<script setup>
import { ref } from "vue";

import mybutton from "./components/mybutton.vue";
import trans from "./components/trans.vue";

const show = ref("on");

//使用GreenScok js动画库实现动画效果
// const beforeEnaater = (el) => {
//   gsap.set(el, { opacity: 0 });
// };
// const enter = (el, done) => {
//   gsap.to(el, {
//     opacity: 1,
//     duration: 2,
//     onComplete: done,
//   });
// };
// const leave = (el, done) => {
//   gsap.to(el, {
//     opacity: 0,
//     duration: 2,
//     onComplete: done,
//   });
// };
</script>

<template>
  <div>
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <trans v-if="show == 'on'" @click="show = 'off'">确定</trans>
      <mybutton v-else @click="show = 'on'">取消</mybutton>
    </transition>
  </div>
  <!-- 使用Animate.css 库添加动画效果 -->
  <!-- <Transition
    appear
    @before-enter="beforeEnaater"
    @enter="enter"
    @leave="leave"
    name="custom-classes"
    mode="out-in"
    enter-active-class="animate__animated animate__bounceIn"
    leave-active-class="animate__animated animate__zoomOutUp"
  >
    <trans v-if="show">提交</trans>
    <trans v-else>取消</trans>
  </Transition> -->
</template>

<style></style>
