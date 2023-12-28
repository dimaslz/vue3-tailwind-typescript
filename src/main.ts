import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { loadGlobalComponents } from "../globalComponents";

import "./assets/css/tailwind.css";

// First, create the app instance
const app = createApp(App);

// Load global components
loadGlobalComponents(app);

// Install plugins
app.use(store).use(router).mount("#app");
