<script lang="ts" setup>
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
    <p>
        {{ bo7owers.name }} is going to start a party at the
        {{ bo7owers.lastName }}'s new place on the beach!
    </p>
</template>

<style lang="scss" scoped>
p {
    margin-top: 5em;
}
</style>
