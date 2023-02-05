<script setup lang="ts">
import { ref, onMounted } from 'vue'

let count = ref<number>(0)

const increment = () => {
    count.value++
}

onMounted(() => {
    console.log(`The initial count is ${count.value}`)
})
</script>

<template>
    <h1>Portfolio</h1>
    <section id="profession">
        <h2>Profesional Work</h2>
        <!-- Todo: Links to CSPS work -->
    </section>
    <hr />
    <section>
        <h2>Hobbies</h2>
        <!-- Todo: redirect to my github -->
    </section>
    <button @click="increment">Count is {{ count }}</button>
</template>
