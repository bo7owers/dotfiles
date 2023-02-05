<script setup lang="ts">
console.log(
    'Hero Image by Olia Danilevich https://www.pexels.com/photo/back-to-school-flatlay-5088007/'
)
</script>

<template>
    <header class="hero-header">
        <img src="../assets/imgs/hero.jpg" alt="" class="hero-img" />
        <h1>Xpnses, the only way to track your spending</h1>
    </header>
</template>

<style lang="scss">
header.hero-header {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    position: relative;
    .hero-img {
        width: 100vw;
        height: 35vh;
        object-fit: cover;
        z-index: 50;
    }
    h1 {
        position: absolute;
        top: 25%;
        z-index: 100;
        color: hsl(0, 0%, 100%);
        padding: 0 1.25rem;

        &::before {
            content: '';
            display: block;
            position: absolute;
            width: 100vw;
            height: 35vh;
            background-color: hsl(204, 100%, 25%);
            opacity: 0.3;
            top: -57%;
            left: 0;
            z-index: 0;
        }
    }
}
</style>
