import { createApp } from "vue";
import App from "./App.vue";

import { create, NDataTable } from "naive-ui";

const naive = create({
  components: [NDataTable],
});

createApp(App).use(naive).mount("#app");
