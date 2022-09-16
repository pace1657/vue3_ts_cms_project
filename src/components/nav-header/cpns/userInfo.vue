<template>
  <div class="user-info">
    <el-dropdown>
      <span class="current-user">
        <el-avatar class="user-avatar" shape="circle" :size="30" :src="avatarUrl" />
        <span class="user-name">用户信息</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <el-icon><User /></el-icon>
            个人信息
          </el-dropdown-item>
          <el-dropdown-item>
            <el-icon><Operation /></el-icon>
            系统设置
          </el-dropdown-item>
          <el-dropdown-item divided @click="handleExitClick">
            <el-icon><SwitchButton /></el-icon>
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { User, Operation, SwitchButton } from "@element-plus/icons-vue";
import cacheUtils from "@/utils/cacheUtils";

export default defineComponent({
  components: {
    User,
    Operation,
    SwitchButton
  },
  setup() {
    const avatarUrl = ref("https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png");

    const router = useRouter();
    const handleExitClick = () => {
      // 退出登录清除token跳转到首页
      cacheUtils.deleteCache("cms_token");
      router.push("/main");
    };

    return {
      avatarUrl,
      handleExitClick
    };
  }
});
</script>

<style scoped lang="less">
.user-info {
  .current-user {
    display: flex;
    align-items: center;
    .user-avatar {
      cursor: pointer;
    }
    .user-name {
      font-size: 14px;
      padding: 0 10px;
      cursor: pointer;
    }
    .user-name:hover {
      color: #0a60bd;
    }
  }
}
</style>
