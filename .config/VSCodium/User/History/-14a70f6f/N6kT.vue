<script setup>
import Navigation from './components/Navigation.vue'
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
            <div class="row-left">Aside goes here</div>
            <footer class="grid-footer row-flex">
                Footer goes here
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nostrum vitae laborum minima corporis sed ipsum odio natus
                    sit itaque? Iure quo a voluptates ab inventore sint libero
                    non! Eos, ad?
                </p>
            </footer>
        </div>
    </div>
</template>
