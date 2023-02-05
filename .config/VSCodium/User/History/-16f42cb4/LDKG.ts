import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import './assets/sass/styles.scss' //custom styles

const app = createApp(App)
app.use(router)
app.mount('#app')