import {
  createRouter,
  // createWebHistory
  createWebHashHistory
} from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import cacheUtils from "@/utils/cacheUtils";
import { initialMenu } from "@/utils/menusMap";

// import LoginPage from "@/views/login/LoginPage.vue";
// import MainPage from "@/views/main/MainPage.vue";

const routes: RouteRecordRaw[] = [
  {
    name: "default",
    path: "/",
    redirect: "/main"
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/login/loginPage.vue")
    // component: LoginPage
  },
  {
    name: "main",
    path: "/main",
    component: () => import("@/views/main/mainPage.vue")
    // component: MainPage
  },
  {
    name: "notFound",
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/notFound/notFoundPage.vue")
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
  // history: createWebHistory()
});

// 路由守卫, 判断token是否有值
router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = cacheUtils.getCache("cms_token");
    if (!token) {
      return "/login";
    }
  }

  if (to.path === "/main") {
    return initialMenu.url;
  }
});

export default router;
