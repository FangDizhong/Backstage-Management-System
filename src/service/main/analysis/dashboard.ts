import fdzRequest from "@/service"

import { IDataType } from "@/service/types"

// https://documenter.getpostman.com/view/12347168/TzzDKb12
enum DashboardAPI {
  goodsCategoryCount = "/goods/category/count",
  goodsCategorySale = "/goods/category/sale",
  goodsCategoryFavor = "/goods/category/favor",
  goodsAddressSale = "/goods/address/sale"
}

// different functions were written because we wanted
// different authorities have different permission
export function getGoodsCategoryCountRequest() {
  return fdzRequest.get<IDataType>({
    url: DashboardAPI.goodsCategoryCount
  })
}
export function getGoodsCategorySaleRequest() {
  return fdzRequest.get<IDataType>({
    url: DashboardAPI.goodsCategorySale
  })
}
export function getGoodsCategoryFavorRequest() {
  return fdzRequest.get<IDataType>({
    url: DashboardAPI.goodsCategoryFavor
  })
}
export function getGoodsAddressSaleRequest() {
  return fdzRequest.get<IDataType>({
    url: DashboardAPI.goodsAddressSale
  })
}
