<template>
  <div class="page-content">
    <base-table
      :dataList="dataList"
      :dataCount="dataCount"
      v-bind="contentTableConfig"
      v-model:paginationInfo="paginationInfo"
    >
      <template v-if="isCreate" #headerHandle>
        <el-button type="primary" @click="handleCreateClick">{{ headerHandleName }}</el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatUTC(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatUTC(scope.row.updateAt) }}</span>
      </template>
      <template #handle="scope">
        <div class="table-handle">
          <template v-if="isUpdate">
            <el-button link type="primary" @click="handleEditClick(scope.row)">
              <el-icon><Edit /></el-icon>
              <span>编辑</span>
            </el-button>
          </template>
          <template v-if="isDelete">
            <el-button link type="primary" @click="handleDeleteClick(scope.row)">
              <el-icon><Delete /></el-icon>
              <span>删除</span>
            </el-button>
          </template>
        </div>
      </template>

      <!-- 动态插槽 -->
      <template v-for="item in dynamicSlot" :key="item.prop" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </base-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue";
import BaseTable from "@/base-ui/table";
import { useStore } from "@/store";
import { usePermission } from "@/hooks/usePermission";
import { Edit, Delete } from "@element-plus/icons-vue";
import { matchDataFormTitle } from "@/utils/commonUtils";

export default defineComponent({
  props: {
    pageName: {
      type: String,
      required: true
    },
    contentTableConfig: {
      type: Object,
      required: true
    }
  },
  emits: ["createBtnClick", "editBtnClick"],
  components: {
    // icon
    Edit,
    Delete,

    BaseTable
  },
  setup(props, { emit }) {
    const store = useStore();

    // 功能权限验证
    const isCreate = usePermission(props.pageName, "create");
    const isDelete = usePermission(props.pageName, "delete");
    const isUpdate = usePermission(props.pageName, "update");
    const isQuery = usePermission(props.pageName, "query");

    // 分页数据
    const paginationInfo = ref({ currentPage: 1, pageSize: 10 });
    watch(paginationInfo, () => getPageData());

    // 发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return;
      store.dispatch("mainModule/requestDataList", {
        pageName: props.pageName,
        queryInfo: {
          offset: (paginationInfo.value.currentPage - 1) * paginationInfo.value.pageSize,
          size: paginationInfo.value.pageSize,
          ...queryInfo
        }
      });
    };
    getPageData();

    // 新增/修改/删除数据
    const handleCreateClick = () => {
      emit("createBtnClick");
    };
    const handleEditClick = (originData: any) => {
      emit("editBtnClick", originData);
    };
    const handleDeleteClick = (rowData: any) => {
      store
        .dispatch("mainModule/deleteRowData", {
          pageName: props.pageName,
          id: rowData.id
        })
        .finally(() => {
          // 重新请求数据
          getPageData();
        });
    };

    // 从vuex获取数据
    const dataList = computed(() => store.getters["mainModule/getDataList"](props.pageName));
    const dataCount = computed(() => store.getters["mainModule/getDataCount"](props.pageName));

    // 排除公共插槽
    const dynamicSlot = props.contentTableConfig.propList.filter((item: any) => {
      if (item.slotName === "createAt") return false;
      if (item.slotName === "updateAt") return false;
      if (item.slotName === "handle") return false;
      return true;
    });

    const headerHandleName = matchDataFormTitle(props.pageName);

    return {
      isCreate,
      isDelete,
      isUpdate,
      isQuery,
      dataList,
      dataCount,
      paginationInfo,
      dynamicSlot,
      getPageData,
      handleCreateClick,
      handleEditClick,
      handleDeleteClick,
      headerHandleName
    };
  }
});
</script>

<style scoped></style>
