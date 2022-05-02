import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core"; // Iconos
import { fas } from "@fortawesome/free-solid-svg-icons"; // Iconos
library.add(fas);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { firestorePlugin } from 'vuefire'

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
