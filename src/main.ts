import { createApp } from "vue";
import App from "./App.vue";

// 全局引入elementUI组件
// import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// import "./service/axios_demo";
// import { requestUtils } from "./service";

// 重置css样式库
import "normalize.css";
// 重置css
import "./assets/css/index.css";

import router from "./router";
import store, { setupStore } from "./store";
import { globalRegister } from "./global";

const app = createApp(App);

app.use(store);
// app.use(ElementPlus);

// 刷新浏览器时将本地信息存储到vuex(需要写在在注册路由之前: use(router))
setupStore();
app.use(router);

// 可以直接调用导入的函数, 也可以通过use调用, 使用app.use更优雅
// globalRegister(app);
app.use(globalRegister);

app.mount("#app");

// console.log(process.env.VUE_APP_BASE_URL);
// console.log(process.env.VUE_APP_BASE_NAME);

// requestUtils.request({
//   url: "/home/multidata",
//   method: "GET",
//   headers: {},
//   isShowLoading: false,
//   interceptors: {
//     requestInterceptor(config) {
//       console.log("方法传入的请求成功拦截");
//       return config;
//     },
//     requestInterceptorCatch(err) {
//       console.log("方法传入的请求失败拦截");
//       return err;
//     },
//     responseInterceptor(res) {
//       console.log("方法传入的响应成功拦截");
//       return res;
//     },
//     responseInterceptorCatch(err) {
//       console.log("方法传入的响应失败拦截");
//       return err;
//     }
//   }
// });

// interface DataType {
//   data: any;
//   returnCode: string;
//   success: boolean;
// }

// requestUtils
//   .request<DataType>({
//     url: "/home/multidata",
//     method: "GET"
//   })
//   .then((res) => {
//     console.log(res.data);
//     console.log(res.returnCode);
//     console.log(res.success);
//   });

// requestUtils.get({
//   url: "/home/multidata"
// });

// requestUtilsOther.request({
//   url: "/home/multidata",
//   method: "GET"
// });
