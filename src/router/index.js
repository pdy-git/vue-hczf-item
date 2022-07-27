import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/Main";
import Home from "@/views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/main",
    component: Main,
    redirect: "/main/home",
    children: [
      {
        path: "home",
        component: Home,
      },
    ],
  },
];

export default new VueRouter({ routes });
