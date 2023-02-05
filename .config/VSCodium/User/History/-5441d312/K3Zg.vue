<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
defineProps<{
    href: string
    description: string
    pageName: string
}>()
</script>
<template>
    <a
        :href="href"
        target="_blank"
        rel="noopener noreferrer"
        v-tippy="t('openIn')"
        >{{ description }}</a
    >
</template>

<style lang="scss" scoped></style>
