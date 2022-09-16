<template>
  <div class="login-account">
    <el-form label-width="65px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="username">
        <el-input v-model="account.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useStore } from "vuex";
import { rules } from "../config/rules-config";
import cacheUtils from "@/utils/cacheUtils";
import type { ElForm } from "element-plus";

export default defineComponent({
  setup() {
    const store = useStore();

    const account = reactive({
      username: cacheUtils.getCache("cms_username") ?? "",
      password: cacheUtils.getCache("cms_password") ?? ""
    });

    const formRef = ref<InstanceType<typeof ElForm>>();

    const loginAction = (isKeepPassword: boolean) => {
      // 校验输入内容的格式
      formRef.value?.validate((valid) => {
        if (valid) {
          // 判断是否记住密码
          if (isKeepPassword) {
            cacheUtils.setCache("cms_username", account.username);
            cacheUtils.setCache("cms_password", account.password);
          } else {
            cacheUtils.deleteCache("cms_username");
            cacheUtils.deleteCache("cms_password");
          }
          // 登录逻辑实现
          store.dispatch("loginModule/accountLoginAction", { ...account });
        }
      });
    };

    return {
      account,
      rules,
      formRef,
      loginAction
    };
  }
});
</script>

<style scoped></style>
