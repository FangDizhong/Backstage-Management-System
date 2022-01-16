import { createStore, Store, useStore as useVuexStore } from "vuex"

import login from "./login/login"
import { IRootState, IStoreType } from "./type"

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

// 原页面刷新时，从缓存里加载已login过的信息到vuex里
export function setupStore() {
  store.dispatch("login/loadLocalLogin")
}

// 为了使vuex的useStore有类型提示：
// 1. 定义了return回来的Store类型是自定义的<IStoreType>
// 2. 把原先vuex的useStore重定类为useVuexStore
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
