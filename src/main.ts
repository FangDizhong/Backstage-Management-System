import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

// element-plus按需引入2
import { globalRegister } from "./global"

// createApp(App).use(store).use(router).mount("#app");

const app = createApp(App)
app.use(store)
app.use(router)
app.mount("#app")

//element-plus按需引入2
// globalRegister(app) //两种写法都可以
app.use(globalRegister)
