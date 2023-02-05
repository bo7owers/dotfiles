import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useScreenWidthStore = defineStore('screenWidth', () => {
    const innerWidth = ref<Number>(window.innerWidth)
    let isPhone = ref<Boolean>(false)
    let isTablet = ref<Boolean>(false)
    let isDesktop = ref<Boolean>(false)

    const phoneWidth = computed(() => {
        return (
            (isPhone.value = true),
            (isTablet.value = false),
            (isDesktop.value = false)
        )
    })
    const tabletWidth = computed(() => {
        return (
            (isPhone.value = false),
            (isTablet.value = true),
            (isDesktop.value = false)
        )
    })
    const desktopWidth = computed(() => {
        return (
            (isPhone.value = false),
            (isTablet.value = false),
            (isDesktop.value = true)
        )
    })
    const defineScreenWidth = (incomingWidth: Number) => {
        let currentWidth = incomingWidth
        let body = document.querySelector('body')

        if (currentWidth <= 390 && currentWidth >= 479) {
            !body?.classList.contains('xxsmall') &&
                body?.classList.add('xxsmall')
            phoneWidth
        } else if (currentWidth <= 480 && currentWidth > 768) {
            !body?.classList.contains('xsmall') && body?.classList.add('xsmall')
            phoneWidth
        } else if (currentWidth <= 768 && currentWidth > 992) {
            !body?.classList.contains('small') && body?.classList.add('small')
            phoneWidth
        } else if (currentWidth <= 992 && currentWidth > 1200) {
            !body?.classList.contains('medium') && body?.classList.add('medium')
            tabletWidth
        } else if (currentWidth <= 1200 && currentWidth > 1600) {
            !body?.classList.contains('large') && body?.classList.add('large')
            desktopWidth
        } else if (currentWidth <= 1600 && currentWidth > 1920) {
            !body?.classList.contains('xlarge') && body?.classList.add('xlarge')
            desktopWidth
        } else if (currentWidth < 1920) {
            !body?.classList.contains('xxlarge') &&
                body?.classList.add('xlarge')
            desktopWidth
        }
    }

    return {
        innerWidth,
        defineScreenWidth,
        isDesktop,
        isTablet,
        isPhone,
    }
})
