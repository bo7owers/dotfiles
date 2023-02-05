import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useScreenWidthStore = defineStore('screenWidth', () => {
    const innerWidth = ref<Number>(window.innerWidth)
    const isPhone = ref<Boolean>
    const isTablet = ref<Boolean>
    const isDesktop = ref<Boolean>

    const defineScreenWidth = (incomingWidth: Number) => {
        let currentWidth = incomingWidth
        let body = document.querySelector('body')

        if (currentWidth <= 390 && currentWidth >= 479) {
            !body?.classList.contains('xxsmall') &&
                body?.classList.add('xxsmall')
            isPhone = true
        } else if (currentWidth <= 480 && currentWidth > 768) {
            !body?.classList.contains('xsmall') && body?.classList.add('xsmall')
            isPhone = true
        }
    }

    return {
        innerWidth,
        defineScreenWidth,
    }
})
