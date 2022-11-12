<template>
  <section>
    <div><slot /></div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
div {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 0.5em;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
  background-color: #16a085;
  animation: idenatifier 2s ease;
}
</style>
