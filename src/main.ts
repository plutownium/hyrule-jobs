// import { createApp } from "vue";
// import App from "./App.vue";
// import "./registerServiceWorker";
// import router from "./router";

// createApp(App).use(router).mount("#app");

// ^^ original, for learning purposes. I call createApp with App as the argument. Then .use is <verbed> (?) with "router" as the arg, and then .mount is <verbed> on the return value from .mount.

import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import mitt from 'mitt';

// createApp(App).use(router).mount("#app");

const app = createApp(App);

const emitter = mitt();

app.use(router)
app.provide('emitter', emitter);
app.mount('#app');
