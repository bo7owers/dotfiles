<script lang="ts" setup>
import ExternalLink from '../components/ExternalLink.vue'
import { useI18n } from 'vue-i18n'
interface person {
    name: String
    lName: String
    age?: Number
}

const rene: person = {
    name: 'Rene',
    lName: 'Torres',
    age: 29,
}

const { t } = useI18n()
</script>

<template>
    <h1>{{ t('homeHeading') }}</h1>

    <h2>{{ rene.name }} {{ rene.lName }}</h2>
    <p>
        I am a web developer who wanst to make the web accessible to everybody.
        <ExternalLink
            pageName="7orresrene"
            href="https://vue.7orresrene.com"
            description="My website's beta version"
        />
    </p>

    <div class="main-img"></div>
    <button class="btn-test">Hello there</button>
</template>

<style lang="scss" scoped>
button {
    width: 1rem;
    &.btn-test {
        width: 5rem;
        background-color: #369;
        color: #fefefe;
    }
}
</style>
