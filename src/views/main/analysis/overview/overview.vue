<template>
  <div class="overview">
    <!-- <h2>overview</h2> -->
    <base-card cardTitle="关于">
      <div class="content-left">
        Vue3+TS Admin 是基于 Vue3、Vuex、VueRouter、ElementPlus 、TypeScript、Echart5
        等后台系统解决方案。
      </div>
    </base-card>
    <!-- 技术栈 -->
    <base-card cardTitle="技术栈">
      <base-text-link :textArrs="technologyStacks"></base-text-link>
      <base-descriptions
        title="开发环境依赖"
        :column="2"
        :tableDatas="dependencies"
      ></base-descriptions>
      <base-descriptions
        title="生产环境依赖"
        :column="2"
        :tableDatas="devDependencies"
      ></base-descriptions>
    </base-card>
    <!-- 项目结构 -->
    <base-card cardTitle="项目结构">
      <div class="content-left">
        <base-code language="bash" :code="projectDir"></base-code>
      </div>
    </base-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseCard from "@/base-ui/card";
import BaseTextLink from "@/base-ui/textLink";
import BaseDescriptions from "@/base-ui/descriptions";
import BaseCode from "@/base-ui/code";
import {
  technologyStacks,
  dependencies,
  devDependencies,
  projectDir
} from "@/views/main/analysis/overview/config";

export default defineComponent({
  name: "overview",
  components: {
    BaseCard,
    BaseTextLink,
    BaseDescriptions,
    BaseCode
  },
  setup() {
    return {
      technologyStacks,
      dependencies,
      devDependencies,
      projectDir
    };
  }
});
</script>

<style scoped lang="less">
.overview {
  .base-card {
    margin-bottom: 10px;
  }
  .content-left {
    text-align: left;
  }
  .el-card {
    margin-bottom: 20px;
    // ::v-deep 重写 element-plus 样式
    &:deep(.el-card__header span) {
      // ::v-deep .el-card__header span {
      font-weight: 700;
    }
  }

  .base-description {
    // ::v-deep 重写 element-plus 样式
    &:deep(.el-descriptions__title) {
      // ::v-deep .el-descriptions__title {
      font-weight: 400;
    }
  }
}
</style>
