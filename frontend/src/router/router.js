import {createRouter, createWebHistory} from "vue-router";
import routes from "./routes/routes.js";

const router = createRouter({
    linkActiveClass: 'router-link-active',
    history: createWebHistory(),
    routes
})

export default router;
