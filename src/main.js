import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";

import "element-ui/lib/theme-chalk/index.css"; // 默认主题
// 参考: https://fontawesome.com/v4/icon/bars
import "font-awesome/css/font-awesome.min.css";

import "@/assets/css/icon.css";
import "babel-polyfill";

Vue.config.productionTip = false;

Vue.use(ElementUI, {
  size: "small",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
