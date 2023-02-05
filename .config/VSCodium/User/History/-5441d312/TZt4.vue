<script setup lang="ts">
const props = defineProps({
    href: typ
})
</script>
<template>
    <a
        :href="props.href"
        target="_blank"
        rel="noopener noreferrer"
        v-tippy="'Open in a new tab'"
        >{{ props.description }}</a
    >
</template>

<style lang="scss" scoped></style>
