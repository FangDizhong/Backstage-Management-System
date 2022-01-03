// 注册全局引用的入口
import { App } from "vue"
import registerElement from "./register-element"

export function globalRegister(app: App): void {
  registerElement(app)
}
