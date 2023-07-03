import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp({});

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/fruit",
            name: "fruit.index",
            component: function () {
                return import("./components/Fruit/Index.vue");
            },
        },
        {
            path: "/users/login",
            name: "user.login",
            component: function () {
                return import("./components/User/Login.vue");
            },
        },
        {
            path: "/users/registration",
            name: "user.registration",
            component: function () {
                return import("./components/User/Registration.vue");
            },
        },
        {
            path: "/users/personal",
            name: "user.personal",
            component: function () {
                return import("./components/User/Personal.vue");
            },
        },
        // {
        //     path: "/people/:id",
        //     name: "person.show",
        //     component: function () {
        //         return import("./components/Person/Show.vue");
        //     },
        // },
    ],
});

export default router;
