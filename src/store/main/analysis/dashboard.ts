import { Module } from "vuex";
import {
  getGoodsCategoryCount,
  getGoodsCategorySale,
  getGoodsCategoryFavor,
  getGoodsAddressSale
} from "@/service/main/analysis/dashboard";
import { IDashboardState } from "./types";
import { IRootState } from "@/store/types";

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      goodsCategoryCount: [],
      goodsCategorySale: [],
      goodsCategoryFavor: [],
      goodsAddressSale: []
    };
  },
  mutations: {
    changeGoodsCategoryCount(state, list: any[]) {
      state.goodsCategoryCount = list;
    },
    changeGoodsCategorySale(state, list: any[]) {
      state.goodsCategorySale = list;
    },
    changeGoodsCategoryFavor(state, list: any[]) {
      state.goodsCategoryFavor = list;
    },
    changeGoodsAddressSale(state, list: any[]) {
      state.goodsAddressSale = list;
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const goodsCategoryCountResult = await getGoodsCategoryCount();
      const goodsCategorySaleResult = await getGoodsCategorySale();
      const goodsCategoryFavorResult = await getGoodsCategoryFavor();
      const goodsAddressSaleResult = await getGoodsAddressSale();
      commit("changeGoodsCategoryCount", goodsCategoryCountResult.data);
      commit("changeGoodsCategorySale", goodsCategorySaleResult.data);
      commit("changeGoodsCategoryFavor", goodsCategoryFavorResult.data);
      commit("changeGoodsAddressSale", goodsAddressSaleResult.data);
    }
  }
};

export default dashboardModule;
