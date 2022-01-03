// 修改webpack配置
// node.js环境支持common.js的模块化规范，所以都这么写

// const path = require("path");

// 配置ElementPlus按需引用地plugin
// https://element-plus.org/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5
const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers")

module.exports = {
  // 配置方式1：CLI提供的属性  https://cli.vuejs.org/zh/config/#vue-config-js
  outputDir: "./docs", //打包路径修改(默认为./dist)

  // 配置方式2：和webpack属性完全一致，最后进行合并
  configureWebpack: {
    //   resolve :{
    //     alias :{
    //       components: "@/components"
    //     }
    //   },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }

  // 配置方式3：箭头函数
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     "@": path.resolve(__dirname,"src"), //当前目录下的src
  //     components: "@/components"
  //   }
  // }

  // // 配置方式4：链式函数
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //   .set("@", path.resolve(__dirname,"src"))
  //   .set("components", "@/components")
  // }
}
