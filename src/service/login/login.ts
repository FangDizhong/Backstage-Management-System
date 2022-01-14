import fdzRequest from ".."

import { IAccount, IDataType, ILoginResult } from "./type"

// https://documenter.getpostman.com/view/12347168/TzsfmQvw#
enum LoginAPI {
  AccountLogin = "/Login",
  LoginUserInfo = "/",
  UserMenus = "/"
}

// login登录的网络请求逻辑
export function accountLoginRequest(account: IAccount) {
  return fdzRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return fdzRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return fdzRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + "/menu",
    showLoading: false
  })
}
