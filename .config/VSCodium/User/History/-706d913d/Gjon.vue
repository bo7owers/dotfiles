<template>
    <a href="#main_content" class="skip-to-main"> Skip to main content </a>
    <div class="app">
        <Navigation />
        <div class="container">
            <!-- <div class="side-left">Aside goes here</div> -->
            <main id="main_content" class="content-area" role="main">
                <router-view />
            </main>
        </div>
    </div>
</template>
<script>
// import Navigation from './components/Navigation.vue'
import Navigation from './components/Navigation.vue'
export default {
    name: 'App',
    components: {
        // Navigation,
        Navigation,
    },
}
</script>
