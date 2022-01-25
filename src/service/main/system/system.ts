import fdzRequest from "@/service"

import { IDataType } from "@/service/types"

export function getPageListAction(url: string, queryInfo: IDataType) {
  // 有很多查询条件要放在data里，所以用post请求
  return fdzRequest.post({
    url: url,
    data: queryInfo
  })
}
