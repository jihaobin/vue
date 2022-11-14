<script setup>
import gsap from "gsap";
const props = defineProps({
  delay: { default: 0.1 },
});
const beforeEnter = (el) => {
  gsap.set(el, {
    x: -100,
    opacity: 0,
  });
};
const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    x: 0,
    duration: 0.6,
    delay: el.dataset.index * props.delay,
  });
};
</script>

<template>
  <div class="todo">
    <transition-group
      appear=""
      name="todo"
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <slot />
    </transition-group>
  </div>
</template>

<style lang="scss">
.todo-leave-to,
.todo-enter-from {
  opacity: 0;
}
.todo.enter-active,
.todo-leave-active {
  transition: all 0.5s ease;
  position: absolute;
}

.todo-move {
  transition: all 0.5s ease;
}
</style>
