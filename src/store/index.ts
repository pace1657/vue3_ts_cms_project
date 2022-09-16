import { createStore, Store, useStore as vuexUseStore } from "vuex";
import loginModule from "./login";
import mainModule from "./main";
import dashboardModule from "./main/analysis/dashboard";
import type { IRootState, IStoreType } from "./types";
import { requestPageDataList } from "@/service/main";

const store = createStore<IRootState>({
  state() {
    return {
      message: "coderzy vuex message",
      name: "coderzy",
      age: 18,
      entriesDepartment: [],
      entriesRole: [],
      entriesMenu: []
    };
  },
  getters: {},
  mutations: {
    changeEntriesDepartment(state, departmentList: any[]) {
      state.entriesDepartment = departmentList;
    },
    changeEntriesRole(state, roleList: any[]) {
      state.entriesRole = roleList;
    },
    changeEntriesMenu(state, menuList: any[]) {
      state.entriesMenu = menuList;
    }
  },
  actions: {
    // 请求数据字典
    async saveDataDictionary({ commit }) {
      const departmentResult = await requestPageDataList("/department/list", {
        offset: 0,
        size: 999
      });
      const roleResult = await requestPageDataList("/role/list", {
        offset: 0,
        size: 999
      });
      const menuResult = await requestPageDataList("/menu/list", {});
      const { list: departmentList } = departmentResult.data;
      const { list: roleList } = roleResult.data;
      const { list: menuList } = menuResult.data;
      commit("changeEntriesDepartment", departmentList);
      commit("changeEntriesRole", roleList);
      commit("changeEntriesMenu", menuList);
    }
  },
  modules: {
    loginModule,
    mainModule,
    dashboardModule
  }
});

export function setupStore() {
  store.dispatch("loginModule/loadLocalData");
  // store.dispatch("saveDataDictionary");
}

export function useStore(): Store<IStoreType> {
  return vuexUseStore();
}

export default store;
