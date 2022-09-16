import { requestUtils } from "..";
import type { IAccount, ILoginResult } from "./types";
import type { IDataType } from "@/service/types";

enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users/", // 用法: /users/{id}
  LoginUserMenus = "/role/" // 用法: /rule/{id}/menu
}

export function accountLoginRequest(account: IAccount) {
  return requestUtils.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: {
      name: account.username,
      password: account.password
    }
  });
}

export function getUserInfoById(id: number) {
  return requestUtils.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    isShowLoading: false
  });
}

export function getUserMenusByRuleId(ruleId: number) {
  return requestUtils.get<IDataType>({
    url: LoginAPI.LoginUserMenus + ruleId + "/menu",
    isShowLoading: false
  });
}
