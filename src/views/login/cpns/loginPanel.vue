<template>
  <div class="login-panel">
    <h1 class="login-panel-title">后台管理系统</h1>
    <el-tabs type="border-card" class="top-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="cellphone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Cellphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-cellphone ref="cellphoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control" v-if="currentTab === 'account'">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <div class="account-control" v-else>
      <span class="space-tag"></span>
      <el-link type="primary">收不到短信?</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick">立即登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { UserFilled, Cellphone } from "@element-plus/icons-vue";
import LoginAccount from "./loginAccount.vue";
import LoginCellphone from "./loginCellphone.vue";

export default defineComponent({
  components: {
    UserFilled,
    Cellphone,
    LoginAccount,
    LoginCellphone
  },
  setup() {
    const isKeepPassword = ref(true);
    const currentTab = ref("account");
    const accountRef = ref<InstanceType<typeof LoginAccount>>();
    const cellphoneRef = ref<InstanceType<typeof LoginCellphone>>();

    const handleLoginClick = () => {
      if (currentTab.value === "account") {
        accountRef.value?.loginAction(isKeepPassword.value);
      } else {
        cellphoneRef.value?.loginAction();
      }
    };

    return {
      isKeepPassword,
      currentTab,
      accountRef,
      cellphoneRef,
      handleLoginClick
    };
  }
});
</script>

<style scoped>
.login-panel {
  width: 320px;
  margin-bottom: 150px;
}
.login-panel-title {
  text-align: center;
}
.top-tabs {
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
}
:deep(.el-tabs__item:last-child) {
  margin-right: -1px;
}
.top-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.top-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}

.account-control {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}
.space-tag {
  height: 32px;
}
.login-btn {
  width: 100%;
  margin-top: 5px;
}
</style>
