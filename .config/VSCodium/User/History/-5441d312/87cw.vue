<script setup lang="ts">
defineProps<{
    href: string
    description: string
}>()
</script>
<template>
    <a
        :href="href"
        target="_blank"
        rel="noopener noreferrer"
        v-tippy="'Open in a new tab'"
        aria-label="Open in a new tab"
        >{{ description }}</a
    >
</template>

<style lang="scss" scoped></style>
