import { ILoginState } from "./login/types"
import { ISystemState } from "./main/system/types"

export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

// 交叉合并两个类型
export type IStoreType = IRootState & IRootWithModule
