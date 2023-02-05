<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

<template>
    <a href="#" class="link">{{ title }}</a>
</template>

<style lang="scss" scoped>
.link::before{
    content: '';
    background-image: url();
}
</style>
