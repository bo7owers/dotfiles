import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useScreenWidthStore = defineStore('screenWidth', () => {
    const innerWidth = ref<Number>(window.innerWidth)
    let isPhone = ref<Boolean>(false)
    let isTablet = ref<Boolean>(false)
    let isDesktop = ref<Boolean>(false)

    const defineScreenWidth = (incomingWidth: Number) => {
        let currentWidth = incomingWidth
        let body = document.querySelector('body')

        if (currentWidth <= 390 && currentWidth >= 479) {
            !body?.classList.contains('xxsmall') &&
                body?.classList.add('xxsmall')
            isPhone.value = true
        } else if (currentWidth <= 480 && currentWidth > 768) {
            !body?.classList.contains('xsmall') && body?.classList.add('xsmall')
            isPhone.value = true
        }else if (currentWidth <= 480 && currentWidth > 768) {
            !body?.classList.contains('xsmall') && body?.classList.add('xsmall')
            isPhone.value = true
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
