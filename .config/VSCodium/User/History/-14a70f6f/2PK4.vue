<script setup>
import Navigation from './components/Navigation.vue'
</script>
<template>
    <a href="#main_content" class="skip-to-main"> Skip to main content </a>
    <div class="app">
        <Navigation />
        <div class="container">
            <!-- <div class="side-left">Aside goes here</div> -->
            <main
                id="main_content"
                class="content-area row-center row-flex"
                role="main"
                tabindex="-1"
            >
                <router-view />
            </main>
        </div>
    </div>
</template>
