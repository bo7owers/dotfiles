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
console.log(bo7owers.name)
</script>

<template>
    <Hero />
</template>

<style lang="scss" scoped>
p {
    margin-top: 5em;
}
</style>
