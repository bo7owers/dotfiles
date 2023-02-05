<template>
    <header>
        <nav role="navigation">
            <div class="logo">
                <router-link class="link" :to="{ name: 'Home' }">
                    <img src="../assets/logo.png" alt="René Torres' logo" />
                </router-link>
            </div>
            <ul v-show="!mobile" class="navigation">
                <!-- Add name for each component when they are done!! -->
                <li>
                    <router-link class="link" :to="{ name: 'Home' }"
                        >Home</router-link
                    >
                </li>
                <li>
                    <router-link class="link" :to="{ name: 'About' }"
                        >About</router-link
                    >
                </li>
                <li>
                    <router-link class="link" :to="{ name: 'Programming' }"
                        >Programming</router-link
                    >
                </li>
                <li>
                    <router-link class="link" :to="{ name: 'Contact' }"
                        >Contact</router-link
                    >
                </li>
            </ul>
            <div class="hamburger" v-show="mobile">
                <!-- Move v-show="mobile" to the i if problems found -->
                <i
                    @click="toggleSmallNav"
                    @keypress.enter="toggleSmallNav"
                    @keypress.space="toggleSmallNav"
                    class="fas fa-ellipsis-v"
                    :class="{ 'active-icon': mobileNav }"
                    tabindex="0"
                ></i>
            </div>
            <transition name="mobile-nav">
                <div v-show="mobileNav" class="mobile-nav">
                    <ul class="nav-list">
                        <!-- Add name for each component when they are done!! -->
                        <li>
                            <router-link
                                class="link"
                                :to="{ name: 'Home' }"
                                @keypress="toggleSmallNav"
                                @keypress.space="toggleSmallNav"
                                @click="toggleSmallNav"
                                >Home</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                class="link"
                                :to="{ name: 'About' }"
                                @keypress="toggleSmallNav"
                                @keypress.space="toggleSmallNav"
                                @click="toggleSmallNav"
                                >About</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                class="link"
                                :to="{ name: 'Portfolio' }"
                                @keypress="toggleSmallNav"
                                @keypress.space="toggleSmallNav"
                                @click="toggleSmallNav"
                                >Portfolio</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                class="link"
                                :to="{ name: 'Contact' }"
                                @keypress="toggleSmallNav"
                                @keypress.space="toggleSmallNav"
                                @click="toggleSmallNav"
                                >Contact</router-link
                            >
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
