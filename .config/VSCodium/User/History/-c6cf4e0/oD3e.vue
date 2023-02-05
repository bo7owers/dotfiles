<script lang="ts" setup>
interface person {
    name: String
    lName: String
    age?: Number
}

const rene: person = {
    name: 'Rene',
    lName: 'Torres',
    age: 29,
}
</script>

<template>
    <h1>{{ rene.name }} {{ rene.lName }}</h1>
    <p>
        I am a web developer who wanst to make the web accessible to everybody.
        <a href="#">testing styles</a>
    </p>
    <div class="main-img"></div>
    <button class="btn-test">Hello there</button>
</template>

<style lang="scss" scoped>
button {
    width: 1rem;
    &.btn-test {
        width: 5rem;
        background-color: #369;
        color: #fefefe;
    }
}
</style>
