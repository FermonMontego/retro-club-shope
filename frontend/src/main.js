import { createApp } from "vue";
import router from "./router/router.js";
import App from "./App.vue";

import clickOutside from "./directives/clickOutside/click-outside.js";

import "./assets/styles/main.scss";

const app = createApp(App);

app.config.globalProperties.window = window;

// app directives
app.directive("click-outside", clickOutside);
// end app directives

app.use(router);

app.mount("#app");
