<template>
    <div>
        {{ lesson.title }}
        <slot :id="lesson.id"></slot>
    </div>
</template>

<script>
export default {
    props: ["lesson"],
};
</script>

<style lang="scss" scoped>
div {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid black;
}
</style>
