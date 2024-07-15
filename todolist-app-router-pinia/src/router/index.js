import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/about",
            name: "about",
            component: () => import("../views/About.vue"),
        },
        {
            path: "/todos",
            name: "todos",
            component: () => import("../views/TodoList.vue"),
        },
        {
            path: "/todos/add",
            name: "add",
            component: () => import("../views/AddTodo.vue"),
        },
        {
            path: "/todos/edit/:id",
            name: "id",
            component: () => import("../views/EditTodo.vue"),
        },
        { path: "/:paths(.*)*", name: "NotFound", component: NotFound },
    ],
});

export default router;
