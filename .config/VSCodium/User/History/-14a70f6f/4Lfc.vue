<script setup>
import Navigation from './components/Nav/Navigation.vue'
import Footer from './components/Footer.vue'
</script>
<template>
    <a href="#main_content" class="skip-to-main"> Skip to main content </a>
    <div class="container all-info">
        <Navigation class="row-full" />
        <div class="row-center">
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
