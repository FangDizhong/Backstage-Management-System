// Element-plus按需引入1
import { App } from "vue"
import "element-plus/dist/index.css"
import { ElButton } from "element-plus"

//定义要注册的组件数组
const components = [ElButton]

// 用for循环注册
export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
