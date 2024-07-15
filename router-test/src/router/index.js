import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Member from "@/views/Member.vue";
import Videos from "@/views/Videos.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/about",
            component: About,
        },
        {
            path: "/member",
            component: Member,
        },
        {
            path: "/videos",
            component: Videos,
        },
    ],
});

export default router;
