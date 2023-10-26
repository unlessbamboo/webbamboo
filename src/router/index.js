import Vue from "vue";
import Router from "vue-router";

const Home = () => import(/* webpackChunkName: "home" */ "@/views/Home.vue");
const Cssexample = () => import(/* webpackChunkName: "cssexample" */ "@/views/Cssexample.vue");
const CssProgress = () => import(/* webpackChunkName: "progress" */ "@/views/Progress.vue");
const NavRotating = () => import(/* webpackChunkName: "navrotating" */ "@/views/NavRotating.vue");

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
    {path: "/progress", component: CssProgress, meta: {title: "进度条"}},
    {path: "/navrotating", component: NavRotating, meta: {title: "旋转导航"}},
    {path: "*", redirect: "/"},
  ],
});
