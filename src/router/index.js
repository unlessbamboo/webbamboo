import Vue from "vue";
import Router from "vue-router";

const Home = () => import(/* webpackChunkName: "home" */ "@/views/Home.vue");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
      meta: {title: "bamboo主页"},
    },
    {path: "*", redirect: "/"},
  ],
});
