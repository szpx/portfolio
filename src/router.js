import { createRouter, createWebHistory } from 'vue-router';
import routesList from './routesList';

const routes = [...routesList];

export default createRouter({
    history: createWebHistory(),
    routes,
});
