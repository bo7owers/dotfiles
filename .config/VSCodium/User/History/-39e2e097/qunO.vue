<script setup>
import { useScreenWidthStore } from '../../stores/ScreenWidthStore'
import { storeToRefs } from 'pinia'
import { onMounted, onUpdated, computed } from 'vue'
import { useI18n } from 'vue-i18n'

// Translations
const { t, d, locale, availableLocales } = useI18n()

// const screenWidth = useScreenWidthStore()

// const { innerWidth, isDesktop, isPhone, isTablet } = storeToRefs(screenWidth)
// const { defineScreenWidth } = screenWidth

// onMounted(() => {
//     console.log(innerWidth.value, 'mounted')
//     console.log(isDesktop.value, isPhone.value, isTablet.value)
//     defineScreenWidth(window.innerWidth)
// })

// onUpdated(() => {
//     console.log(innerWidth.value, 'updated')
//     defineScreenWidth(window.innerWidth)
// })
</script>

<template>
    <header>
        <nav role="navigation">
            <div class="logo">
                <router-link class="link" :to="{ name: 'Home' }">
                    <img src="../../assets/logo.png" alt="René Torres' logo" />
                </router-link>
            </div>
            <ul v-if="!mobile" class="navigation">
                <li>
                    <router-link class="link" to="/">
                        {{ t('home') }}
                    </router-link>
                </li>
                <li>
                    <router-link class="link" to="/about">
                        {{ t('about') }}
                    </router-link>
                </li>
                <li>
                    <router-link class="link" to="/programming">
                        {{ t('programming') }}
                    </router-link>
                </li>
                <li>
                    <router-link class="link" to="/contact">
                        {{ t('contact') }}
                    </router-link>
                </li>
                <li style="margin-left: auto; flex-shrink: 1">
                    <a href="#" class="link">Change Language</a>
                </li>
            </ul>
            <div class="hamburger" v-if="mobile">
                <!-- Move v-show="mobile" to the i if problems found -->
                <i
                    @click="toggleSmallNav"
                    @keypress.enter="toggleSmallNav"
                    @keypress.space="toggleSmallNav"
                    class="fas fa-ellipsis-v"
                    :class="{ 'active-icon': mobileNav }"
                    tabindex="0"
                ></i>
                <button
                    @click="toggleSmallNav"
                    @keypress.enter="toggleSmallNav"
                    class="menu-ellipsis"
                    :class="{ 'active-icon': mobileNav }"
                    tabindex="0"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 32 32"
                    >
                        <circle cx="16" cy="8" r="2" fill="currentColor" />
                        <circle cx="16" cy="16" r="2" fill="currentColor" />
                        <circle cx="16" cy="24" r="2" fill="currentColor" />
                    </svg>
                </button>
            </div>
            <transition name="mobile-nav">
                <div v-if="mobileNav" class="mobile-nav">
                    <ul class="nav-list">
                        <li>
                            <router-link
                                class="link"
                                @keypress="toggleSmallNav"
                                @click="toggleSmallNav"
                                to="/"
                            >
                                {{ t('home') }}
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                class="link"
                                @keypress="toggleSmallNav"
                                @click="toggleSmallNav"
                                to="/about"
                            >
                                {{ t('about') }}
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                class="link"
                                @keypress="toggleSmallNav"
                                @click="toggleSmallNav"
                                to="/programming"
                            >
                                {{ t('programming') }}
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                class="link"
                                @keypress="toggleSmallNav"
                                @click="toggleSmallNav"
                                to="/contact"
                            >
                                {{ t('contact') }}
                            </router-link>
                        </li>
                    </ul>
                    <div class="close-nav">
                        <i
                            @keypress="toggleSmallNav"
                            @keypress.space="toggleSmallNav"
                            @click="toggleSmallNav"
                            class="fas fa-times close"
                            :class="{ 'active-icon': mobileNav }"
                            tabindex="0"
                        ></i>
                    </div>
                </div>
            </transition>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'main-nav',
    data() {
        return {
            scrolledNavigation: null,
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        }
    },
    created() {
        window.addEventListener('resize', this.checkScreenSize)
        this.checkScreenSize()
    },
    methods: {
        toggleSmallNav() {
            this.mobileNav = !this.mobileNav
        },

        checkScreenSize() {
            this.windowWidth = window.innerWidth
            if (this.windowWidth <= 750) {
                this.mobile = true
                return
            }
            this.mobile = false
            this.mobileNav = false
            return
        },
    },
}
</script>

<style lang="scss" scoped>
@use '../../assets/sass/vars/colors' as c;
@use '../../assets/sass/mixins/var-backups' as v;
@use '../../assets/sass/mixins/breakpoints' as b;

// my nav
header {
    background-color: c.$so-white;
    z-index: 1000;
    width: 100%;
    transition: 0.5s ease-in all;
    nav {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
        transition: 0.5s ease-out all;
        width: 90%;
        margin: 0 auto;
        @media (min-width: 1140px) {
            max-width: 1140px;
        }

        .logo {
            .link > img,
            .link {
                display: inline-block;
                height: 5em;
                width: 5rem;
                border-radius: 1rem;
                user-select: none;
                transition: 100ms ease-out all;
                &:focus,
                &:focus-visible {
                    outline: #2c2c2c solid 3px;
                    outline-color: c.$brand-black;
                }
            }
        }
        // Mobile nav
        & .mobile-nav {
            display: flex;
            flex-flow: row nowrap;
            align-items: flex-start;
            justify-content: center;
            gap: 5rem;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            padding: 1.25rem 0rem 0 2rem;
            z-index: 10000;
            background: #fff;
            border-top: 2px solid #2c2c2c;
            border-right: 2px solid #2c2c2c;
            .nav-list {
                flex-flow: column wrap;
                justify-content: start;
                align-items: center;
                gap: 1rem;
            }
        }
        //  desktop nav
        ul {
            list-style: none;
            display: flex;
            flex-flow: row wrap;
            gap: 0 2rem;

            li {
                padding: 1rem;
                user-select: none;
            }

            & .link {
                font-weight: 500;
                color: c.$brand-black;
                text-decoration: none;
                border-bottom: 3px solid transparent;
                transition: 210ms ease-in all;
                &:hover,
                &:focus,
                &:focus-visible {
                    color: c.$brand-blue;
                    border-color: c.$underline-pink;
                    border-bottom-left-radius: 2px;
                    border-bottom-right-radius: 2px;
                }
                &:focus,
                &:focus-visible {
                    outline: solid 2px;

                    outline-color: c.$brand-blue;
                    outline-offset: 0.5rem;
                    border-radius: 2px;
                }
                &.router-link-active {
                    color: c.$brand-blue;
                    border-color: c.$underline-pink;
                    border-bottom-left-radius: 2px;
                    border-bottom-right-radius: 2px;
                }
            }
        }
        .hamburger {
            & .menu-ellipsis {
                background-color: transparent;
                border: none;
                cursor: pointer;
                font-size: 1.5rem;
                transition: 350ms ease all;
                &.active-icon {
                    transform: rotate(180deg);
                }
            }
            .active-icon {
                transform: rotate(180deg);
            }
        }
    }
}
</style>
