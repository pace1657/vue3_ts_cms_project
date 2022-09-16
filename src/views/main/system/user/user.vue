<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      ref="pageContentRef"
      :pageName="pageName"
      @createBtnClick="handleCreateClick"
      @editBtnClick="handleEditClick"
    >
      <template #status="scope">
        <el-button plain size="small" :type="scope.row.enable === 1 ? 'success' : 'danger'">
          {{ scope.row.enable === 1 ? "启用" : "禁用" }}
        </el-button>
      </template>
    </page-content>
    <page-modal
      :modalFormConfig="modalFormConfigRef"
      ref="pageModalRef"
      :pageName="pageName"
      :initialData="initialData"
      @confirmBtnClick="refreshPageData"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";

import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";
import PageModal from "@/components/page-modal";

import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";
import { modalFormConfig } from "./config/modal.config";

import { usePageContent } from "@/hooks/usePageContent";
import { usePageModal } from "@/hooks/usePageModal";

export default defineComponent({
  name: "user",
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const pageName = "users";
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageContent();

    // 控制密码输入框显示
    const createCallback = () => {
      const passwordItem = modalFormConfig.formItems.find((item) => item.filed === "password");
      if (passwordItem) passwordItem.isHidden = false;
    };
    const editCallback = () => {
      const passwordItem = modalFormConfig.formItems.find((item) => item.filed === "password");
      if (passwordItem) passwordItem.isHidden = true;
    };

    const [pageModalRef, initialData, handleCreateClick, handleEditClick] = usePageModal(
      createCallback,
      editCallback
    );

    // 设置下拉框等动态数据
    const store = useStore();
    const modalFormConfigRef = computed(() => {
      const departmentItem = modalFormConfig.formItems.find(
        (item) => item.filed === "departmentId"
      );
      const roleItem = modalFormConfig.formItems.find((item) => item.filed === "roleId");
      if (departmentItem)
        departmentItem.selectOptions = store.state.entriesDepartment.map((item) => {
          return { title: item.name, value: item.id };
        });
      if (roleItem)
        roleItem.selectOptions = store.state.entriesRole.map((item) => {
          return { title: item.name, value: item.id };
        });
      return modalFormConfig;
    });

    // 刷新页面数据
    const refreshPageData = () => {
      pageContentRef.value.getPageData();
    };

    return {
      pageName,
      searchFormConfig,
      contentTableConfig,
      modalFormConfigRef,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      pageModalRef,
      initialData,
      handleCreateClick,
      handleEditClick,
      refreshPageData
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
