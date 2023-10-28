import {createRouter, createWebHistory} from "vue-router";

const Home = () => import("@/views/Home.vue");
const CssLayout = () => import("@/views/CssLayout.vue");
const Cssexample = () => import("@/views/cssexp/Cssexample.vue");
const CssProgress = () => import("@/views/cssexp/Progress.vue");
const NavRotating = () => import("@/views/cssexp/NavRotating.vue");
const Search = () => import("@/views/cssexp/Search.vue");
const SplitLandPage = () => import("@/views/cssexp/SplitLandPage.vue");
const WaveLogin = () => import("@/views/cssexp/WaveLogin.vue");
const Keycodes = () => import("@/views/cssexp/Keycodes.vue");
const Faq = () => import("@/views/cssexp/Faq.vue");

const routes = [
  {
    path: "/",
    component: Home,
    meta: {title: "bamboo主页"},
  },
  {
    path: "/cssexp",
    component: CssLayout,
    children: [
      {path: "", component: Cssexample, meta: {title: "css示例页"}},
      {path: "progress", component: CssProgress, meta: {title: "进度条"}},
      {path: "navrotating", component: NavRotating, meta: {title: "旋转导航"}},
      {path: "search", component: Search, meta: {title: "搜索框"}},
      {path: "splitelangpage", component: SplitLandPage, meta: {title: "切割页面"}},
      {path: "wavelogin", component: WaveLogin, meta: {title: "登录页面"}},
      {path: "keycodes", component: Keycodes, meta: {title: "键盘输入键页面"}},
      {path: "faq", component: Faq, meta: {title: "FAQ页面"}},
    ],
  },
  {path: "/:pathMatch(.*)*", redirect: "/"},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
