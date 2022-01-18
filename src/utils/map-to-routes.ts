import { RouteRecordRaw } from "vue-router"

export function mapMenusToRoutes(userMenus: any[]) {
  const routes: RouteRecordRaw[] = []

  // 1. 先加载所有的routes
  const allRoutes: RouteRecordRaw[] = []
  //返回一个对象  require是webpack加载文件夹的工具(路径，递归到次级文件夹，匹配正则)
  const routeFiles = require.context("../router/main", true, /\.ts/)
  const filePaths = routeFiles.keys()
  filePaths.forEach((key) => {
    // 根据路径加载文件，用commons.js的require函数
    // key其实就是每个路径，根据.做切割，取第二截
    const route = require("../router/main" + key.split(".")[1])
    allRoutes.push(route.default)
  })
  // console.log(allRoutes)

  // 2. 根据菜单获取需要的routes
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        // find 是es6语法，找到唯一一个,      {return }可以省略
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
      } else {
        // 如果type不等于2，则把它的下一级放进这个函数再跑一边
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)
  return routes
}
