import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.scss";

const app = createApp(App);

//给全局添加一个focus指令实现表单自动选中
app.directive("focus", (el) => {
  console.log(el);
  el.focus();
});

app.mount("#app");
