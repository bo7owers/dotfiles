<script setup>
import Navigation from './components/Navigation.vue'
import { useScreenWidthStore } from './stores/ScreenWidthStore'
import { storeToRefs } from 'pinia'
import { onMounted, onUpdated } from 'vue'

const screenWidth = useScreenWidthStore()

const { innerWidth } = storeToRefs(screenWidth)

onMounted(() => {
    console.log(innerWidth.value, 'mounted')
})

onUpdated(() => {
    console.log(innerWidth.value, 'updated')
})
</script>
<template>
    <a href="#main_content" class="skip-to-main"> Skip to main content </a>
    <div class="app">
        <Navigation />
        <div class="container">
            <!-- <div class="side-left">Aside goes here</div> -->
            <main
                id="main_content"
                class="content-area"
                role="main"
                tabindex="-1"
            >
                <router-view />
            </main>
        </div>
    </div>
</template>
