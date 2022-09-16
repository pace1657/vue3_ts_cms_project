<template>
  <div class="nav-header">
    <el-icon class="fold-icon" @click="handleChangeFold">
      <template v-if="isFold">
        <Expand />
      </template>
      <template v-else>
        <Fold />
      </template>
    </el-icon>
    <div class="header-content">
      <!-- 面包屑 -->
      <base-breadcrumb :breadcrumbs="breadcrumbs" />
      <!-- 用户信息 -->
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "@/store";
import UserInfo from "../cpns/userInfo.vue";
import BaseBreadcrumb from "@/base-ui/breadcrumb";
import { matchBreadcrumbByPath } from "@/utils/menusMap";
import { Expand, Fold } from "@element-plus/icons-vue";

export default defineComponent({
  emits: ["changeFold"],
  components: {
    // icon component
    Expand,
    Fold,

    UserInfo,
    BaseBreadcrumb
  },
  setup(props, { emit }) {
    const isFold = ref(false);

    const handleChangeFold = () => {
      isFold.value = !isFold.value;
      emit("changeFold", isFold.value);
    };

    // 获取面包屑数据
    const store = useStore();
    const userMenus = computed(() => store.state.loginModule.userMenus);
    const route = useRoute();
    const breadcrumbs = computed(() => matchBreadcrumbByPath(userMenus.value, route.path));

    return {
      isFold,
      handleChangeFold,
      breadcrumbs
    };
  }
});
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  align-items: center;
  width: 100%;
  .fold-icon {
    font-size: 25px;
    cursor: pointer;
  }
  .header-content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
}
</style>
