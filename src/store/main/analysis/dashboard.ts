import { Module } from "vuex"

import {
  getGoodsCategoryCountRequest,
  getGoodsCategorySaleRequest,
  getGoodsCategoryFavorRequest,
  getGoodsAddressSaleRequest
} from "@/service/main/analysis/dashboard"

import { IDashboardState } from "./types"
import { IRootState } from "@/store/types"

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      goodsCategoryCount: [],
      goodsCategorySale: [],
      goodsCategoryFavor: [],
      goodsAddressSale: []
    }
  },
  // 修改state数据
  mutations: {
    changeGoodsCategoryCount(state, list) {
      state.goodsCategoryCount = list
    },
    changeGoodsCategorySale(state, list) {
      state.goodsCategorySale = list
    },
    changeGoodsCategoryFavor(state, list) {
      state.goodsCategoryFavor = list
    },
    changeGoodsAddressSale(state, list) {
      state.goodsAddressSale = list
    }
  },
  // 间接获取state进行处理后的数据
  getters: {},
  //把异步操作(比如网络请求)，commit到mutation，再修改到state
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryCountResult = await getGoodsCategoryCountRequest()
      commit("changeGoodsCategoryCount", categoryCountResult.data)
      const categorySaleResult = await getGoodsCategorySaleRequest()
      commit("changeGoodsCategorySale", categorySaleResult.data)
      const categoryFavorResult = await getGoodsCategoryFavorRequest()
      commit("changeGoodsCategoryFavor", categoryFavorResult.data)
      const addressSaleResult = await getGoodsAddressSaleRequest()
      commit("changeGoodsAddressSale", addressSaleResult.data)
    }
  }
}

export default dashboardModule
