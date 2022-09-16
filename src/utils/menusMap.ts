import { RouteRecordRaw } from "vue-router";
import { IBreadcrumb } from "@/base-ui/breadcrumb";

let initialMenu: any = null;

export function mapMenusToRoutes(userMenus: any): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];

  // 获取所有router
  const allRoutes: RouteRecordRaw[] = [];
  const routerFile = require.context("@/router/main", true, /\.ts/);
  routerFile.keys().forEach((key) => {
    const router = require("@/router/main" + key.replace(".", ""));
    allRoutes.push(router.default);
  });

  // 匹配菜单path路径
  function _recurseGetPath(menus: any[]) {
    for (const menu of menus) {
      if (menu.type === 2) {
        const router = allRoutes.find((router) => router.path === menu.url);
        if (router) routes.push(router);
        // 设置首次进入时的默认menu
        if (!initialMenu) {
          initialMenu = menu;
        }
      } else {
        _recurseGetPath(menu.children);
      }
    }
  }
  _recurseGetPath(userMenus);

  return routes;
}

export function matchBreadcrumbByPath(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = [];
  matchMenuByPath(userMenus, currentPath, breadcrumbs);
  return breadcrumbs;
}

export function matchMenuByPath(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const matchMenu = matchMenuByPath(menu.children ?? [], currentPath);
      if (matchMenu) {
        breadcrumbs?.push({ name: menu.name });
        breadcrumbs?.push({ name: matchMenu.name });
        return matchMenu;
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu;
    }
  }
}

export function getAllPermissions(userMenus: any[]): string[] {
  const allPermissions: string[] = [];

  function _recurseGetPermission(menus: any[]) {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? []);
      } else {
        allPermissions.push(menu.permission);
      }
    }
  }
  _recurseGetPermission(userMenus);

  return allPermissions;
}

export function getMenuTreeLeafId(menuList: any[]): number[] {
  const menuKeys: number[] = [];

  function _recurseGetMenuId(menus: any[]) {
    for (const menu of menus) {
      if (menu.children) {
        _recurseGetMenuId(menu.children);
      } else {
        menuKeys.push(menu.id);
      }
    }
  }
  _recurseGetMenuId(menuList);

  return menuKeys;
}

export { initialMenu };
