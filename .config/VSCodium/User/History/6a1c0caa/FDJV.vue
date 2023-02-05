<script lang="ts">
interface Rdog {
    name: string
    lastName: string
    age?: number
}

const bo7owers: Rdog = {
    name: 'Rene',
    lastName: 'Towers',
}
</script>

<template>
    <Hero />
    <p>{{ name }}</p>
</template>

<style lang="scss" scoped>
p {
    margin-top: 5em;
}
</style>
