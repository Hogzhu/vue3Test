import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
// import { imgLoad } from './directives/imgLoad';

const MainApp = createApp(App);
// vue3的指令写法变动了，不用inserted、bind等，转而使用生命周期
MainApp.directive("focus", {
  mounted: (el: HTMLElement) => {
    console.log(el, "   好家伙，我focus了");
  },
  updated: (el: HTMLElement) => {
    console.log("好家伙，我更新了呀", el);
  },
  beforeUnmount: () => {
    console.log("好兄弟，我无了");
  }
});
// (Vue as any).use(imgLoad);

MainApp.mount("#app");
