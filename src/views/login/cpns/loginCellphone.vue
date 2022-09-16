<template>
  <div class="login-cellphone">
    <el-form label-width="65px" :rules="rules" :model="cellphone" ref="formRef">
      <el-form-item label="手机号" prop="phoneNum">
        <el-input v-model="cellphone.phoneNum" />
      </el-form-item>
      <el-form-item label="验证码" prop="codeNum">
        <div class="check-code">
          <el-input v-model="cellphone.codeNum" />
          <el-button type="primary" class="send-code" @click="sendCodeClick">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { rules } from "../config/rules-config";
import { ElForm, ElMessage } from "element-plus";

export default defineComponent({
  setup() {
    const cellphone = reactive({
      phoneNum: "",
      codeNum: ""
    });

    const formRef = ref<InstanceType<typeof ElForm>>();

    const sendCodeClick = () => {
      ElMessage({
        showClose: true,
        message: "功能未完成"
      });
    };

    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          ElMessage({
            showClose: true,
            message: "功能未完成"
          });
        }
      });
    };
    return {
      cellphone,
      rules,
      formRef,
      sendCodeClick,
      loginAction
    };
  }
});
</script>

<style scoped>
.check-code {
  display: flex;
}
.send-code {
  margin-left: 10px;
}
</style>
