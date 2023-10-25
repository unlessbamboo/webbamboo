import Vue from "vue";
import Router from "vue-router";

const Home = () => import(/* webpackChunkName: "home" */ "@/views/Home.vue");
const Cssexample = () => import(/* webpackChunkName: "cssexample" */ "@/views/Cssexample.vue");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
      meta: {title: "bamboo主页"},
    },
    {
      path: "/cssexample",
      component: Cssexample,
      meta: {title: "css示例页"},
    },
    {path: "*", redirect: "/"},
  ],
});
