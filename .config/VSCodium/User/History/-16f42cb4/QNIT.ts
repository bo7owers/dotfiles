import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// icons
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faGithub,
    faLinkedin,
    faMastodon,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMastodon, faGithub, faLinkedin)

// styles
import './assets/sass/styles.scss' //custom styles

// app
const pinia = createPinia()
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(pinia)
app.mount('#app')
