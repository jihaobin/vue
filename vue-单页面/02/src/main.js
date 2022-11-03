import { createApp } from "vue";
import App from "./App.vue";
import card from "./components/card.vue";
import XInput from "./components/Xinput.vue";

const app = createApp(App);
app.component("card", card);
app.component("XInput", XInput);

app.mount("#app");
