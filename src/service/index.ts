import RequestUtils from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";
import cacheUtils from "@/utils/cacheUtils";

export const requestUtils = new RequestUtils({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor(config) {
      // 请求添加token
      const token = cacheUtils.getCache("cms_token");
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      // console.log("传入的请求成功拦截");
      return config;
    },
    requestInterceptorCatch(err) {
      // console.log("传入的请求失败拦截");
      return err;
    },
    responseInterceptor(res) {
      // console.log("传入的响应成功拦截");
      return res;
    },
    responseInterceptorCatch(err) {
      // console.log("传入的响应失败拦截");
      return err;
    }
  }
});

// export const requestUtilsOther = new RequestUtils({
//   baseURL: BASE_URL,
//   timeout: TIME_OUT
// });
