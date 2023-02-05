import { createApp } from 'vue'
import App from './App.vue'
import './base.css'
import PrimeVue from 'primevue/config'
import Card from 'primevue/card'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/lara-light-purple/theme.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(PrimeVue)
app.component('Dialog', Dialog)
app.component('Button', Button)
app.component('Card', Card)
app.mount('#app')
