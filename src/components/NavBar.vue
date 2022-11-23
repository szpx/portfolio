<template>
    <div>
        <nav>
            <ul class="nav-links">
                <li v-for="item in menuItems" :key="item">
                    <Transition name="navlinkfade"
                        ><router-link v-if="show" :to="item.route">{{
                            item.title
                        }}</router-link></Transition
                    >
                </li>
            </ul>

            <div class="burger" @click="navSlide">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: false,
            menuItems: [
                { title: 'Home', route: '/' },
                { title: 'Projects', route: '/projects' },
                { title: 'Contact', route: '/contact' },
            ],
        };
    },
    methods: {
        navSlide() {
            const burger = document.querySelector('.burger');
            const nav = document.querySelector('.nav-links');

            this.show = !this.show;
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        },
    },
    created() {
        var self = this;
        document.addEventListener('click', (e) => {
            const burger = document.querySelector('.burger');
            const nav = document.querySelector('.nav-links');
            const line1 = document.querySelector('.line1');
            const line2 = document.querySelector('.line2');
            const line3 = document.querySelector('.line3');
            if (
                e.target == nav ||
                e.target == burger ||
                e.target == line1 ||
                e.target == line2 ||
                e.target == line3
            ) {
                return;
            } else {
                self.show = !self.show;
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    },
};
</script>
<style scoped>
nav {
    display: flex;
    background: #333;
    color: #fff;
    justify-content: flex-end;
    height: 40px;
}
.nav-links {
    position: fixed;
    left: 0px;
    top: 40px;
    background: #333;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    align-items: center;
    width: 75%;
    height: 100%;
    margin: 0;
    padding: 0;
    transform: translateX(-100%);
    transition: All 0.5s ease-in;
}
.navlinkfade-enter-active {
    animation: navlinkfade-in 2s ease;
    letter-spacing: 0px;
}
@keyframes navlinkfade-in {
    from {
        opacity: 0;
        transform: translateX(-50px);
        letter-spacing: -10px;
    }
    to {
        transform: translateX(0);
    }
}
.nav-links a {
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    border-bottom: 2px solid transparent;
    transform: translateX(0%);
    transition: 0.5s ease;
    letter-spacing: 5px;
}
.nav-links a:hover {
    letter-spacing: 0px;
}
.burger {
    padding: 5px;
    margin-top: 4px;
    margin-right: 5px;
    height: fit-content;
    width: fit-content;
}
.burger div {
    width: 30px;
    height: 3px;
    background: #fff;
    transition: all 0.5s ease;
    margin-bottom: 5px;
}
.nav-active {
    transform: translateX(0);
}
.toggle .line1 {
    transform: rotate(-45deg) translate(-5px, 6px);
}
.toggle .line2 {
    opacity: 0;
}
.toggle .line3 {
    transform: rotate(45deg) translate(-5px, -6px);
}
</style>
