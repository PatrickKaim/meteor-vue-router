import VueRouter from "vue-router";
import HomeView from "../imports/ui/views/HomeView";
import DashboardView from "../imports/ui/views/DashboardView";

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardView
    }
];

const router = new VueRouter({
    routes: routes
});

export default router;
