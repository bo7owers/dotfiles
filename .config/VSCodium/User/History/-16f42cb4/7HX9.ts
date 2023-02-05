import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import VueTippy from 'vue-tippy'

import './assets/sass/styles.scss' //custom styles
import 'tippy.js/dist/tippy.css' // tooltip styles

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(VueTippy, {
    directive: 'tippy', // => v-tippy
    component: 'tippy', // => <tippy/>
    componentSingleton: 'tippy-singleton', // => <tippy-singleton/>,
    defaultProps: {
        allowHTML: true,
        delay: [150, 200],
    },
})
app.mount('#app')
