import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import VueTippy from 'vue-tippy'
import { createI18n } from 'vue-i18n'

import './assets/sass/styles.scss' //custom styles
import 'tippy.js/dist/tippy.css' // tooltip styles

// i18n stuff
import en from './locales/en.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
const i18n = createI18n({
    locale: 'en',
    en,
    es,
    fr,
    datetimeFormats: {
        en: {
            short: {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            },
            long: {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
            },
        },
    },
})

const pinia = createPinia()
const app = createApp(App)
app.use(i18n)
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
