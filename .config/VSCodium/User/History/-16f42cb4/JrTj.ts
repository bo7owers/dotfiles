import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Tooltip from 'primevue/tooltip'

import './assets/sass/styles.scss' //custom styles
const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(PrimeVue)
app.directive('tooltip', Tooltip)
app.mount('#app')
