<template>
  <div class="goods">
    <page-content :contentTableConfig="contentTableConfig" ref="pageContentRef" pageName="goods">
      <template #status="scope">
        <el-button plain size="small" :type="scope.row.status === 1 ? 'success' : 'danger'">
          {{ scope.row.status === 1 ? "启用" : "禁用" }}
        </el-button>
      </template>
      <template #imgUrl="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          fit="cover"
          preview-teleported
        />
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageContent from "@/components/page-content";
import { contentTableConfig } from "./config/content.config";

import { usePageContent } from "@/hooks/usePageContent";

export default defineComponent({
  name: "goods",
  components: {
    PageContent
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageContent();
    return {
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick
    };
  }
});
</script>

<style scoped>
.page-search,
.page-content {
  background-color: #fff;
  border-radius: 3px;
}
.page-search {
  margin-bottom: 20px;
}
.page-content {
  padding: 10px 20px;
}
</style>
