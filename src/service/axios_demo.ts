import axios from "axios";

// 模拟get请求
axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
  console.log(res.data);
});

// get请求参数
axios
  .get("http://httpbin.org/get", {
    params: {
      name: "coderzy",
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data);
  });

// post请求参数
axios
  .post(
    "http://httpbin.org/post",
    {
      name: "postSecondParam"
    },
    {
      data: {
        name: "postDataProp"
      }
    }
  )
  .then((res) => {
    console.log(res.data);
  });

// promise是可以传入类型的
new Promise<string>((resolve) => {
  resolve("abc");
}).then((res) => {
  console.log(res);
});

// 设置axios全局配置
// 配置全局请求域名
axios.defaults.baseURL = "http://httpbin.org";
// 请求超时时间
axios.defaults.timeout = 1000;

// 可以对每个请求单独配置
axios
  .get("/get", {
    params: {
      name: "lzy",
      age: 18
    },
    // headers: {},
    timeout: 1000
  })
  .then((res) => {
    console.log(res.data);
  });

// axios.all 发送多个请求, 一起返回
axios
  .all([
    axios.get("/get", { params: { name: "getRequest" } }),
    axios.post("/post", { name: "postRequest" }, {})
  ])
  .then((res) => {
    console.log(res[0].data);
    console.log(res[1].data);
  });

// axios拦截器
// fn1: 请求发送成功会执行的函数
// fn2: 请求发送失败会执行的函数
axios.interceptors.request.use(
  (config) => {
    // 给请求添加token
    // 添加loading动画等
    console.log("请求发送成功拦截信息");
    return config;
  },
  (err) => {
    console.log("请求发送失败拦截信息");
    return err;
  }
);

axios.interceptors.response.use(
  (res) => {
    console.log("响应成功的拦截");
    return res;
  },
  (err) => {
    console.log("服务器响应失败");
    return err;
  }
);
