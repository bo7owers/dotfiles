import { useI18n } from 'vue-i18n'
const { t, d, locale, availableLocales } = useI18n()

export const appPages = {
    home: {
        to: '/',
        name: t('home'),
    },
    about: {
        to: '/about',
        name: t('about'),
    },
    programming: {
        to: '/programming',
        name: t('programming'),
    },
    contact: {
        to: '/contact',
        name: t('contact'),
    },
}
