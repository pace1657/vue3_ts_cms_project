import { Module } from "vuex";

import { accountLoginRequest, getUserInfoById, getUserMenusByRuleId } from "@/service/login";
import cacheUtils from "@/utils/cacheUtils";
import { mapMenusToRoutes, getAllPermissions } from "@/utils/menusMap";
import router from "@/router";

import type { IRootState } from "../types";
import type { ILoginState } from "./types";
import type { IAccount } from "@/service/login/types";

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: [],
      userPermissions: []
    };
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo;
    },
    changeMenuInfo(state, userMenus: any) {
      state.userMenus = userMenus;

      // 获取菜单路由映射
      const routes = mapMenusToRoutes(userMenus);

      // 添加路由到菜单(router.main.children)
      routes.forEach((route) => {
        router.addRoute("main", route);
      });

      // 设置权限信息
      const permissions = getAllPermissions(userMenus);
      state.userPermissions = permissions;
    }
  },
  actions: {
    // 账号登录逻辑实现
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      // 登陆验证逻辑
      const loginResult = await accountLoginRequest(payload);
      const { id, token } = loginResult.data;
      commit("changeToken", token);
      cacheUtils.setCache("cms_token", token);

      // 请求用户信息
      const userInfoResult = await getUserInfoById(id);
      const userInfo = userInfoResult.data;
      commit("changeUserInfo", userInfo);
      cacheUtils.setCache("cms_userInfo", userInfo);

      // 获取用户菜单
      const userMenusResult = await getUserMenusByRuleId(userInfo.role.id);
      const userMenus = userMenusResult.data;
      commit("changeMenuInfo", userMenus);
      cacheUtils.setCache("cms_userMenus", userMenus);

      // 初始化数据字典
      dispatch("saveDataDictionary", null, { root: true });

      // 跳转到首页
      router.push("/main");
    },

    // 存储localStorage数据到vuex(用户通过浏览器刷新页面时)
    loadLocalData({ commit, dispatch }) {
      const token = cacheUtils.getCache("cms_token");
      const userInfo = cacheUtils.getCache("cms_userInfo");
      const userMenus = cacheUtils.getCache("cms_userMenus");
      if (token) {
        commit("changeToken", token);

        // 初始化数据字典
        dispatch("saveDataDictionary", null, { root: true });
      }
      if (userInfo) {
        commit("changeUserInfo", userInfo);
      }
      if (userMenus) {
        commit("changeMenuInfo", userMenus);
      }
    }
  }
};

export default loginModule;
