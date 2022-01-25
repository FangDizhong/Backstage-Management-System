import { Module } from "vuex"
import { IRootState } from "@/store/types"
import { ISystemState } from "./types"
import { getPageListAction } from "@/service/main/system/system"

const systemModule: Module<ISystemState, IRootState> = {
  // https://vuex.vuejs.org/zh/guide/modules.html#%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4
  // 如果希望你的模块具有更高的封装度和复用性，
  // 你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。
  // 当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。
  namespaced: true,

  // 保存状态
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  //把异步操作(比如网络请求)，commit到mutation，再修改到state
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 1.要到页面要渲染的数据
      const pageResult = await getPageListAction(
        payload.pageUrl,
        payload.queryInfo
      )

      const { list, totalCount } = pageResult.data
    }
  }
}

export default systemModule
