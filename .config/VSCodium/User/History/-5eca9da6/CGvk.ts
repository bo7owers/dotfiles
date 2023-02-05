import { useI18n } from 'vue-i18n'
const { t, d, locale, availableLocales } = useI18n()

export const appPages = {
    home: {
        to: '/',
        name: 'Home',
    },
    about: {
        to: '/about',
        name: 'About',
    },
    programming: {
        to: '/programming',
        name: 'Programming',
    },
    contact: {
        to: '/contact',
        name: 'Contact',
    },
}
