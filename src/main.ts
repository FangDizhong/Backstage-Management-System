import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

// element-plus按需引入2
import { globalRegister } from "./global"

// axios_demo 不用起名字
// import "./service/axios_demo"

// 使用封装axios的自定义io库
import fdzRequest from "./service"

// createApp(App).use(store).use(router).mount("#app");

const app = createApp(App)
app.use(store)
app.use(router)
app.mount("#app")

//element-plus按需引入2
// globalRegister(app) //两种写法都可以
app.use(globalRegister)

console.log(process.env.BASE_URL)
console.log(process.env.BASE_NAME)

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

// 使用封装axios的自定义io库
fdzRequest
  .request<DataType>({
    url: "/home/multidata",
    method: "GET"
    // showLoading: false
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })

// // 使用封装axios的自定义io库(临时request带拦截器的情况)
// fdzRequest.request({
//   url: "/home/multidata",
//   method: "GET",
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log("单独请求的config")
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log("单独响应的response")
//       return res
//     }
//   }
// })
