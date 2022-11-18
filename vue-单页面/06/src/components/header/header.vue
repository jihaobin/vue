<template>
  <div>
    <h3>
      <slot name="title"></slot>
    </h3>
    <p>
      <slot name="subtitle"></slot>
    </p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
div {
  margin-left: 15px;
  h3 {
    margin: 10px 0px;
  }
}
</style>
