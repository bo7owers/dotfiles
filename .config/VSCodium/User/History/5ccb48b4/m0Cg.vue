<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

<template>
    <a href="#" class="link lang-dropdown">{{ title }}</a>
</template>

<style lang="scss" scoped>
.lang-dropdown {
    color: #369 !important;
    &::after {
        content: '';
        background-image: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="1em" height="1em" viewBox="0 0 24 24"%3E%3Cpath fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 8l6 6m-7 0l6-6l2-3M2 5h12M7 2h1m14 20l-5-10l-5 10m2-4h6"%2F%3E%3C%2Fsvg%3E');
        display: block;
        width: 1rem;
        height: 1rem;
        background-repeat: no-repeat;
        position: relative;
        top: -1.5rem;
        right: -12rem;

        &:focus-visible,
        &:hover {
            outline: none !important;
        }
    }
}
</style>
