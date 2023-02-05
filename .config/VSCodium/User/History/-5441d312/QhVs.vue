<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
defineProps<{
    href: string
    description: string
    pageName: string
}>()
const changeLang = computed(() => {
    return (locale.value = 'es')
})
</script>
<template>
    <button class="btn" @click="changeLang">fr</button>

    <a
        :href="href"
        target="_blank"
        rel="noopener noreferrer"
        v-tippy="`Open link in a new tab`"
        >{{ t('openIn') }}</a
    >
</template>

<style lang="scss" scoped></style>
