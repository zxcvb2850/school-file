import Vue from "vue";
import App from "./App";
import store from "./store";

// const fundebug = require("fundebug-wxjs");

Vue.config.productionTip = false;
Vue.prototype.$store = store;
App.mpType = "app";

/*fundebug.init({
  apikey: "c79aefb8a2e2cf5799e6c2a15c314658018a3737bef53309335e134a0672916c"
});*/

const app = new Vue(App);
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ["^pages/index/main", "pages/active/main", "pages/movie/main", "pages/love/main", "pages/my/main"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#A468FB",
      navigationBarTitleText: "小白电影",
      navigationBarTextStyle: "#FFF"
    },
    tabBar: {
      color: "#A468FB",
      selectedColor: "#000",
      backgroundColor: "#FFF",
      position: "bottom",
      list: [{
        iconPath: "static/img/select_index_not.png",
        selectedIconPath: "static/img/select_index_yes.png",
        pagePath: "pages/index/main",
        text: "首页"
      }, {
        iconPath: "static/img/select-activity-not.png",
        selectedIconPath: "static/img/select-activity-yes.png",
        pagePath: "pages/active/main",
        text: "活动"
      }, {
        iconPath: "static/img/select-movie-not.png",
        selectedIconPath: "static/img/select-movie-yes.png",
        pagePath: "pages/movie/main",
        text: "电影"
      }, {
        iconPath: "static/img/select-love-not.png",
        selectedIconPath: "static/img/select-love-yes.png",
        pagePath: "pages/love/main",
        text: "约吧"
      }, {
        iconPath: "static/img/select-my-not.png",
        selectedIconPath: "static/img/select-my-yes.png",
        pagePath: "pages/my/main",
        text: "我的"
      }]
    }
  }
};
