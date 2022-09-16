import axios from "axios";
import type { AxiosInstance } from "axios";
import type { UtilsInterceptors, UtilsRequestConfig } from "./types";

import { ElLoading } from "element-plus";
import { LoadingInstance } from "element-plus/lib/components/loading/src/loading";

const DEFAULT_LOADING = true;

class RequestUtils {
  instance: AxiosInstance;
  interceptors?: UtilsInterceptors;
  isShowLoading: boolean;
  loading?: LoadingInstance;

  constructor(config: UtilsRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;

    this.isShowLoading = config.isShowLoading ?? DEFAULT_LOADING;

    // 添加通过config传入的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 添加全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log("全局的请求成功拦截");
        if (this.isShowLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "加载中..."
            // background: "rgba(0, 0, 0, .2)"
          });
        }
        return config;
      },
      (err) => {
        // console.log("全局的请求失败拦截");
        // 移除loading
        this.loading?.close();
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        // console.log("全局的响应成功拦截");
        // 移除loading
        this.loading?.close();
        // const data = res.data;
        // if (data.resultCode === "-1") {
        //   console.log("服务器状态码拦截");
        // } else {
        //   return data;
        // }
        // 提取data
        return res.data;
      },
      (err) => {
        // console.log("全局的响应失败拦截");
        // 移除loading
        this.loading?.close();
        // if (err.response.status === "404") {
        //   console.log("浏览器状态码判断");
        // }
        return err;
      }
    );
  }

  request<T>(config: UtilsRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config.interceptors.requestInterceptor(config);
      }
      if (config.isShowLoading === false) {
        this.isShowLoading = config.isShowLoading;
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            config.interceptors.responseInterceptor(res);
          }

          this.isShowLoading = DEFAULT_LOADING;

          resolve(res);
        })
        .catch((err) => {
          if (config.interceptors?.responseInterceptorCatch) {
            config.interceptors.responseInterceptorCatch(err);
          }

          this.isShowLoading = DEFAULT_LOADING;

          reject(err);
        });
    });
  }

  get<T>(config: UtilsRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }
  post<T>(config: UtilsRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }
  patch<T>(config: UtilsRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" });
  }
  delete<T>(config: UtilsRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" });
  }
}

export default RequestUtils;
