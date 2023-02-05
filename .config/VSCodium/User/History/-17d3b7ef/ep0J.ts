import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useScreenWidthStore = defineStore('screenWidth', () => {
    const innerWidth = ref<Number>(window.innerWidth)

    const defineScreenWidth = (incomingWidth: Number) => {
        let currentWidth = incomingWidth
        let body = document.querySelector('body')

        if (currentWidth <= 390 && currentWidth >= 479) {
            !body?.classList.contains('xxsmall') &&
                body?.classList.add('xxxsmall')
        } else if (currentWidth <= 480 && currentWidth > 768){
            body?.classList.add('else')
        }
    }

    return {
        innerWidth,
        defineScreenWidth,
    }
})
