import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/sass/css/styles.css' //custom styles

const app = createApp(App)
app.use(router)
app.mount('#app')
