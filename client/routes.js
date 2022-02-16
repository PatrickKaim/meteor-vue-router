import {createRouter, createWebHistory} from 'vue-router';
import HomeView from "../imports/ui/views/HomeView";
import DashboardView from "../imports/ui/views/DashboardView";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
