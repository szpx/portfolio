<template>
    <div>
        <!-- <div
            class="dark:bg-zinc-900 dark:border-b dark:border-sky-600 bg-white w-full h-12 flex justify-end"
        >
            <button
                class="dark:text-white text-2xl font-bold mr-5"
                @click="toggleMobileMenu"
            >
                -
            </button>
        </div>
        <ul
            class="dark:bg-zinc-900 h-screen w-3/4"
            :class="{
                hidden: menuClosed,
            }"
        >
            <li
                v-for="item in menu"
                :key="item"
                class="dark:text-white text-black"
            >
                {{ item }}
            </li>
        </ul> -->
        <HamBtn />
    </div>
</template>
<script>
import HamBtn from './HamBtn.vue';

export default {
    data() {
        return {
            menu: ['Home', 'Contact', 'Projects'],
            menuClosed: true,
        };
    },
    methods: {
        toggleMobileMenu() {
            this.menuClosed = !this.menuClosed;
        },
    },
    components: { HamBtn },
};
</script>
<style></style>
