import { requestUtils } from "@/service";
import { IDataType } from "@/service/types";

enum dashboardAPI {
  goodsCategoryCount = "/goods/category/count",
  goodsCategorySale = "/goods/category/sale",
  goodsCategoryFavor = "/goods/category/favor",
  goodsAddressSale = "goods/address/sale"
}

export function getGoodsCategoryCount() {
  return requestUtils.get<IDataType>({
    url: dashboardAPI.goodsCategoryCount
  });
}

export function getGoodsCategorySale() {
  return requestUtils.get<IDataType>({
    url: dashboardAPI.goodsCategorySale
  });
}

export function getGoodsCategoryFavor() {
  return requestUtils.get<IDataType>({
    url: dashboardAPI.goodsCategoryFavor
  });
}

export function getGoodsAddressSale() {
  return requestUtils.get<IDataType>({
    url: dashboardAPI.goodsAddressSale
  });
}
