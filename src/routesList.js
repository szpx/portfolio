import Home from './components/HomeView.vue';
import Projects from './components/ProjectsView.vue';
import Contact from './components/ContactView.vue';

const routesList = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact },
];

export default routesList;
