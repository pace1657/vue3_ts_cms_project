<template>
  <div class="base-table">
    <div class="table-header">
      <slot name="header">
        <div class="header-title">{{ title }}</div>
        <div class="header-handle">
          <slot name="headerHandle"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="dataList"
      style="width: 100%"
      :cell-style="{ padding: '10px 0' }"
      v-bind="childrenProps"
      @selection-change="selectionChange"
    >
      <template v-if="isShowSelectColumn">
        <el-table-column type="selection" width="70px" align="center"></el-table-column>
      </template>
      <template v-if="isShowIndexColumn">
        <el-table-column type="index" label="序号" width="80px" align="center"></el-table-column>
      </template>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="table-footer">
      <slot name="tableFooter">
        <template v-if="isShowPagination">
          <el-pagination
            :currentPage="paginationInfo.currentPage"
            :page-size="paginationInfo.pageSize"
            :page-sizes="[10, 30, 50]"
            layout="->, total, sizes, prev, pager, next, jumper"
            :total="dataCount"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </template>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ITableColumn } from "@/base-ui/table";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ""
    },
    dataList: {
      type: Array,
      required: true
    },
    dataCount: {
      type: Number,
      default: 0
    },
    paginationInfo: {
      type: Object,
      default: () => ({ currentPage: 1, pageSize: 10 })
    },
    propList: {
      type: Array as PropType<ITableColumn[]>,
      default: () => []
    },
    isShowIndexColumn: {
      type: Boolean,
      default: false
    },
    isShowSelectColumn: {
      type: Boolean,
      default: false
    },
    isShowPagination: {
      type: Boolean,
      default: true
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:paginationInfo"],
  setup(props, { emit }) {
    const selectionChange = (value: any) => {
      console.log(value);
    };
    const handleSizeChange = (pageSize: number) => {
      emit("update:paginationInfo", { ...props.paginationInfo, pageSize });
    };
    const handleCurrentChange = (currentPage: number) => {
      emit("update:paginationInfo", { ...props.paginationInfo, currentPage });
    };
    return {
      selectionChange,
      handleSizeChange,
      handleCurrentChange
    };
  }
});
</script>

<style scoped lang="less">
.base-table {
  .table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 0;
    .header-title {
      font-size: 22px;
      font-weight: 700;
    }
  }
  .table-footer {
    margin: 15px 0;
  }
}
</style>
