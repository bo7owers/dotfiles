<!-- <script lang="ts" setup>
    const imgPath = ['../assets/img/memoji.png']
    let mainImg = document.querySelector('.main-img')!
    imgPath.forEach((image) => {
        mainImg.innerHTML = `<img src="${image} class="img res" alt="3D design representintg René Torres">`
    })
</script> -->

<template>
    <h1>René Torres</h1>
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
