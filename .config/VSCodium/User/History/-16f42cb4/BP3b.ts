import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import VueTippy from 'vue-tippy'

import './assets/sass/styles.scss' //custom styles
const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(VueTippy, { defaultProps: { placement: 'top' } })
app.mount('#app')
