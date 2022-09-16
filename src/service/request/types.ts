import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface UtilsInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (err: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (err: any) => any;
}

export interface UtilsRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: UtilsInterceptors<T>;
  isShowLoading?: boolean;
}
