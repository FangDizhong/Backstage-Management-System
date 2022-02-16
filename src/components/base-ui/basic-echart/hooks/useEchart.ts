// 重新封装创建Echart的方法
import * as echarts from "echarts"
// TS: json 文件要在shims-vue.d.ts注册才不会报错
import ChinaMapData from "../data/china.json"

// 注册中国地图json
echarts.registerMap("china", ChinaMapData)

// 执行useEchart() 就是执行default function
export default function (dom: HTMLElement) {
  const echartInstance = echarts.init(dom)

  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }

  const updateSize = () => {
    echartInstance.resize()
  }
  window.addEventListener("resize", () => {
    echartInstance.resize()
  })

  // return 对象时，使用时可以只用其中一个{setOptions}=useEchart()
  // return 数组时，使用时必须按顺序取出
  return { echartInstance, setOptions, updateSize }
}
