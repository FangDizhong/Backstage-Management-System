//不需要了，因为用了unplugin-vue-components & unplugin-auto-import
// unplugin-icons发布前需要
// https://element-plus.org/zh-CN/component/icon.html
// 注册全局引用的入口
import { App } from "vue"
import registerElement from "./register-element"

export function globalRegister(app: App): void {
  registerElement(app)
}
