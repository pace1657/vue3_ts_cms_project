<template>
  <div class="role">
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
    ></page-content>
    <page-modal
      :modalFormConfig="modalFormConfig"
      ref="pageModalRef"
      :pageName="pageName"
      :initialData="initialData"
      :otherData="otherData"
    >
      <template #default>
        <div class="menu-tree">
          <el-tree
            ref="menuTreeRef"
            :data="menus"
            show-checkbox
            node-key="id"
            :props="{ children: 'children', label: 'name' }"
            @check="handleSelectMenuClick"
          />
        </div>
      </template>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, nextTick } from "vue";
import { useStore } from "@/store";
import { getMenuTreeLeafId } from "@/utils/menusMap";
import { ElTree } from "element-plus";

import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";
import PageModal from "@/components/page-modal";

import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";
import { modalFormConfig } from "./config/modal.config";

import { usePageContent } from "@/hooks/usePageContent";
import { usePageModal } from "@/hooks/usePageModal";

export default defineComponent({
  name: "role",
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const menuTreeRef = ref<InstanceType<typeof ElTree>>();
    // 菜单树回显回调函数
    const menuTreeEcho = (item: any) => {
      const menuLeafKeys = getMenuTreeLeafId(item.menuList);
      nextTick(() => {
        menuTreeRef.value?.setCheckedKeys(menuLeafKeys, false);
      });
    };

    const pageName = "role";
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageContent();
    const [pageModalRef, initialData, handleCreateClick, handleEditClick] = usePageModal(
      undefined,
      menuTreeEcho
    );

    const store = useStore();
    const menus = computed(() => store.state.entriesMenu);
    const otherData = ref({});
    const handleSelectMenuClick = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys;
      const halfCheckedKeys = data2.halfCheckedKeys;
      const menuList = [...halfCheckedKeys, ...checkedKeys];
      otherData.value = { menuList };
    };

    // 刷新页面数据
    // const refreshPageData = () => {
    //   pageContentRef.value.getPageData();
    // };

    return {
      pageName,
      searchFormConfig,
      contentTableConfig,
      modalFormConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      pageModalRef,
      initialData,
      handleCreateClick,
      handleEditClick,
      // refreshPageData,
      menus,
      otherData,
      handleSelectMenuClick,
      menuTreeRef
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
.menu-tree {
  margin-left: 25px;
}
</style>
