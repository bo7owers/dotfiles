<script setup>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
</script>
<template>
    <a href="#main_content" class="skip-to-main"> Skip to main content </a>
    <div class="app">
        <Navigation />
        <div class="container">
            <main
                id="main_content"
                class="content-area row-center row-flex row-flex-center"
                role="main"
                tabindex="-1"
            >
                <router-view />
            </main>
            <!-- <div class="row-left">Aside goes here</div> -->
        </div>
        <Footer />
    </div>
</template>
