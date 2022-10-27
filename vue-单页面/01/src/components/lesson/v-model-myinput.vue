<template>
  <div>
    <input :value="title" @input="$emit('update:title', $event.target.value)" />
    子组件{{ title }}
  </div>
</template>

<script>
export default {
  props: ["title"],
  emtis: ["update:title"],
};
</script>

<style lang="scss" scoped></style>
