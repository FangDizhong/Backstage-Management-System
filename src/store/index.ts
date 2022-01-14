import { createStore } from "vuex"

import login from "./login/login"
import { IRootState } from "./type"

const store = createStore<IRootState>({
  // 保存状态
  state() {
    return {
      name: "xhsensei",
      age: 29
    }
  },
  // 修改状态，使用时通过commit修改方法
  mutations: {},
  // 存放计算状态里的值之后的数据
  getters: {},
  //把异步操作(比如网络请求)，commit到mutation，再修改到state
  actions: {},
  // 模块化开发
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch("login/loadLocalLogin")
}

export default store
