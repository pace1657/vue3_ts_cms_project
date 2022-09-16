<template>
  <div class="page-search">
    <base-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h3 class="header">高级检索</h3>
      </template>
      <template #footer>
        <div class="footer">
          <el-button @click="handleResetClick">
            <el-icon><Refresh /></el-icon>
            <span>重置</span>
          </el-button>
          <el-button @click="handleQueryClick" type="primary">
            <el-icon><Search /></el-icon>
            <span>搜索</span>
          </el-button>
        </div>
      </template>
    </base-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseForm from "@/base-ui/form";
import { Search, Refresh } from "@element-plus/icons-vue";

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  emits: ["resetBtnClick", "queryBtnClick"],
  components: {
    // icon component
    Search,
    Refresh,

    BaseForm
  },
  setup(props, { emit }) {
    // 抽取双向绑定属性名
    const attributes: any = {};
    props.searchFormConfig.formItems.forEach((item: any) => {
      attributes[item.filed] = "";
    });
    const formData = ref(attributes);

    // 重置
    const handleResetClick = () => {
      // 方式一:
      // for (let key in attributes) {
      //   formData.value[key] = attributes[key];
      // }
      // 方式二:
      formData.value = attributes;
      emit("resetBtnClick");
    };

    // 搜索
    const handleQueryClick = () => {
      emit("queryBtnClick", formData.value);
    };

    return {
      formData,
      handleResetClick,
      handleQueryClick
    };
  }
});
</script>

<style scoped>
.header {
  margin: 10px 0;
}
.footer {
  text-align: right;
  padding: 10px 30px;
}
</style>
