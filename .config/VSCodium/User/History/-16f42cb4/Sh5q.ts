import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

import './assets/sass/styles.scss' //custom styles
const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
