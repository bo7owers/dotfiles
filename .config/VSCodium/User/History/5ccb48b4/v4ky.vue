<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

<template>
    <a href="#" class="link">{{ title }}</a>
</template>
