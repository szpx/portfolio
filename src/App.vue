<script setup>
import MainContent from './components/MainContent.vue';
import Navbar from './components/NavBar.vue';

// Dark mode
if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

localStorage.theme = 'light';
localStorage.theme = 'dark';
localStorage.removeItem('theme');
</script>

<template>
    <div class="dark:bg-slate-700 h-screen">
        <Navbar />
        <MainContent />
    </div>
</template>

<style scoped></style>
