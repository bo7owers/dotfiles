<script setup lang="ts">
defineProps<{
    href: string
    description: string
    pageName: string
}>()
</script>
<template>
    <a
        :href="href"
        target="_blank"
        rel="noopener noreferrer"
        v-tippy="`Open link in a new tab`"
        >{{ description }}</a
    >
</template>

<style lang="scss" scoped></style>
