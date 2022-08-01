import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/layout",
  },
  {
    path: "/layout",
    component: () => import("@/views/layout"),
    redirect: "./layout/home",
    children: [
      {
        path: "home",
        component: () => import("@/views/Home"),
      },
      {
        path: "list",
        component: () => import("@/views/list"),
      },
      {
        path: "news",
        component: () => import("@/views/news"),
      },
      {
        path: "my",
        component: () => import("@/views/user"),
      },
    ],
  },
];

export default new VueRouter({ routes });
