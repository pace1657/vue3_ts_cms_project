<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="logo-img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!isCollapse" class="logo-title">Vue3+TS Admin</span>
    </div>
    <el-menu
      :default-active="defaultPath"
      class="el-menu-vertical"
      :collapse="isCollapse"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 判断是否有二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单可展开的标题 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon v-if="item.icon">
                <component :is="matchIcon(item.icon)"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历二级菜单 -->
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item :index="subItem.id + ''" @click="menuItemClick(subItem)">
                <el-icon v-if="subItem.icon">
                  <component :is="matchIcon(subItem.icon)"></component>
                </el-icon>
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 没有二级菜单的情况 -->
        <template v-else>
          <el-menu-item :index="item.id + ''">
            <el-icon v-if="item.icon">
              <component :is="matchIcon(item.icon)"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "@/store";
import { useRouter, useRoute } from "vue-router";
import { matchMenuByPath } from "@/utils/menusMap";
import { Monitor, Setting, Goods, ChatLineRound } from "@element-plus/icons-vue";

export default defineComponent({
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  components: {
    // icon component
    monitor: Monitor,
    setting: Setting,
    goods: Goods,
    chatlineround: ChatLineRound
  },
  setup() {
    const store = useStore();
    const userMenus = computed(() => store.state.loginModule.userMenus);

    const router = useRouter();
    const route = useRoute();

    // 获取对应menu
    const matchMenu = matchMenuByPath(userMenus.value, route.path);
    const defaultPath = ref(matchMenu.id + "");

    const matchIcon = (iconName: string) => {
      const finalIcon = iconName.replace("el-icon-", "").replaceAll("-", "");
      return finalIcon;
    };

    const menuItemClick = (item: any) => {
      router.push(item.url);
    };

    return {
      userMenus,
      defaultPath,
      matchIcon,
      menuItemClick
    };
  }
});
</script>

<style lang="less">
.nav-menu {
  height: 100%;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    .logo-img {
      height: 100%;
      margin: 0 10px;
    }
    .logo-title {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }
  }
  .el-menu {
    color: #b7bdc3;
    background-color: #001529 !important;
    border-right: none;
    .el-sub-menu {
      .el-menu-item {
        padding-left: 50px;
        background-color: #0c2135;
      }
      .el-menu-item:hover {
        color: #fff;
        background-color: #1f3141;
      }
      .el-menu-item.is-active {
        color: #fff;
        background-color: #0a60bd;
      }
    }
    .el-sub-menu__title {
      background-color: #001529 !important;
    }
    .el-sub-menu__title:hover {
      color: #fff !important;
      background-color: #1f3141 !important;
    }
  }
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
