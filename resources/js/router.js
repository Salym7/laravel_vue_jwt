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
        // {
        //     path: "/people/create",
        //     name: "person.create",
        //     component: function () {
        //         return import("./components/Person/Create.vue");
        //     },
        // },
        // {
        //     path: "/people/:id/edit",
        //     name: "person.edit",
        //     component: function () {
        //         return import("./components/Person/Edit.vue");
        //     },
        // },
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
