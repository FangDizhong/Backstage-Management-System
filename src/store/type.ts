import { ILoginState } from "./login/type"

export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState
}

// 交叉合并两个类型
export type IStoreType = IRootState & IRootWithModule
