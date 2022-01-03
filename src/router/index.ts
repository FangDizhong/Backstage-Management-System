import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
// import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    // 懒加载：需要的时候才加载用箭头函数
    component: () => import("@/views/login/login.vue")
  },
  {
    path: "/main",
    name: "main",
    // 懒加载：需要的时候才加载用箭头函数
    component: () => import("@/views/main/main.vue")
  }

  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
