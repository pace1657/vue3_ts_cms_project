// 1.手动切换环境(不推荐)
// const BASE_URL = "http://coderzy.org/dev";
// const BASE_NAME = "coderzy_dev";

// const BASE_URL = "http://coderzy.org/prod";
// const BASE_NAME = "coderzy_prod";

// const BASE_URL = "http://coderzy.org/test";
// const BASE_NAME = "coderzy_test";

// 2.根据process.env.NODE_ENV区分
// 开发环境: development
// 生产环境: production
// 测试环境: test
let BASE_URL: string;
const TIME_OUT = 10000;

if (process.env.NODE_ENV === "development") {
  // BASE_URL = "http://coderzy.org/dev";
  // BASE_URL = "http://123.207.32.32:8000/";
  BASE_URL = "/api";
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "http://coderzy.org/prod";
} else {
  BASE_URL = "http://coderzy.org/test";
}

export { BASE_URL, TIME_OUT };
