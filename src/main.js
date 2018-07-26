import Vue from "vue";
import App from "./App";
import store from "./store";

const fundebug = require("fundebug-wxjs");

Vue.config.productionTip = false;
Vue.prototype.$store = store;
App.mpType = "app";

fundebug.init({
  apikey: "c79aefb8a2e2cf5799e6c2a15c314658018a3737bef53309335e134a0672916c"
});
fundebug.notify("Test", "Hello Fundebug!");

const app = new Vue(App);
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ["pages/logs/main", "^pages/index/main"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "school",
      navigationBarTextStyle: "black"
    }
  }
};
