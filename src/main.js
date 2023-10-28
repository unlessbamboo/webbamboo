import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue"; // 引入所有图标，并命名为 Icons

import App from "./App.vue";
import router from "./router";

import "@/assets/css/icon.css";

import { FontAwesomeIcon } from "@/icon.js";

const app = createApp(App);

// 全局注册
Object.keys(ElementPlusIconsVue).forEach((key) => {
  app.component(key, ElementPlusIconsVue[key]);
});
app
  .use(ElementPlus, {
    size: "small",
  })
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
