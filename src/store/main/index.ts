import { Module } from "vuex";
import {
  requestPageDataList,
  deletePageDataById,
  createPageData,
  updatePageDataById
} from "@/service/main";
import type { IMainState } from "./types";
import type { IRootState } from "@/store/types";

const mainModule: Module<IMainState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    };
  },
  getters: {
    getDataList(state) {
      return (pageName: string) => {
        // switch (pageName) {
        //   case "users":
        //     return state.usersList;
        //   case "role":
        //     return state.roleList;
        // }
        return (state as any)[`${pageName}List`];
      };
    },
    getDataCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`];
      };
    }
  },
  mutations: {
    changeUsersList(state, usersList: any[]) {
      state.usersList = usersList;
    },
    changeUsersCount(state, usersCount: number) {
      state.usersCount = usersCount;
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList;
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount;
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList;
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount;
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList;
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount;
    }
  },
  actions: {
    async requestDataList({ commit }, payload: any) {
      // 获取对应url
      let url = "";
      switch (payload.pageName) {
        case "users":
          url = "/users/list";
          break;
        case "role":
          url = "/role/list";
          break;
        case "goods":
          url = "/goods/list";
          break;
        case "menu":
          url = "/menu/list";
          break;
      }

      // 发送请求获取页面数据
      const resultData = await requestPageDataList(url, payload.queryInfo);
      const { list, totalCount } = resultData.data;
      // pageName首字母转成大写
      const formatPageName = payload.pageName.slice(0, 1).toUpperCase() + payload.pageName.slice(1);
      commit(`change${formatPageName}List`, list);
      commit(`change${formatPageName}Count`, totalCount);
      // switch (payload.pageName) {
      //   case "users":
      //     commit("changeUsersList", list);
      //     commit("changeUsersCount", totalCount);
      //     break;
      //   case "role":
      //     commit("changeRoleList", list);
      //     commit("changeRoleCount", totalCount);
      //     break;
      // }
    },

    async deleteRowData(context, payload: any) {
      const { pageName, id } = payload;
      const url = `/${pageName}/${id}`;
      const resultData = await deletePageDataById(url);
      return resultData;
    },

    async createRowData({ dispatch }, payload: any) {
      const { pageName, newData } = payload;
      const url = `/${pageName}`;
      await createPageData(url, newData);
      // 重新请求数据
      dispatch("requestDataList", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    },

    async updateRowData({ dispatch }, payload: any) {
      const { pageName, editData, id } = payload;
      const url = `/${pageName}/${id}`;
      await updatePageDataById(url, editData);
      // 重新请求数据
      dispatch("requestDataList", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    }
  }
};

export default mainModule;
