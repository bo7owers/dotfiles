import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useScreenWidthStore = defineStore('screenWidth', () => {
    const innerWidth = ref<Number>(window.innerWidth)

    const defineScreenWidth = (incomingWidth: Number) => {
        let currentWidth = innerWidth
        let body = document.querySelector('body')

        if (currentWidth >= 390) {
            !body?.classList.contains('xxxsmall') &&
                body?.classList.add('xxxsmall')
        }
    }

    return {
        innerWidth,
        defineScreenWidth,
    }
})
