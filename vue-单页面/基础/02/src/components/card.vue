<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="main"></slot>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
div {
  * {
    border: 1px solid black;
  }
  header {
    height: 50px;
    background: #f3f3f3;
    padding-left: 10px;
    padding-top: 10px;
  }
  main {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
  }
}
</style>
