<template>
  <div class="page-modal">
    <el-dialog v-model="dialogVisible" :title="modalTitle" width="25%" destroy-on-close center>
      <base-form v-bind="modalFormConfig" v-model="formData"></base-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import BaseForm from "@/base-ui/form";
import { matchDataFormTitle } from "@/utils/commonUtils";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    pageName: {
      type: String,
      required: true
    },
    modalFormConfig: {
      type: Object,
      required: true
    },
    initialData: {
      type: Object,
      default: () => ({})
    },
    otherData: {
      type: Object,
      default: () => ({})
    }
  },
  // emits: ["confirmBtnClick"],
  components: {
    BaseForm
  },
  setup(props) {
    const isEditPage = ref(false);
    let modalTitle = ref(matchDataFormTitle(props.pageName));
    watch(
      () => isEditPage.value,
      (newValue) => {
        if (newValue) {
          modalTitle.value = matchDataFormTitle(props.pageName, false);
        } else {
          modalTitle.value = matchDataFormTitle(props.pageName);
        }
      }
    );
    const dialogVisible = ref(false);
    const formData = ref<any>({});
    watch(
      () => props.initialData,
      (newValue) => {
        for (const item of props.modalFormConfig.formItems) {
          formData.value[`${item.filed}`] = newValue[`${item.filed}`];
        }
      }
    );

    const store = useStore();
    const handleConfirmClick = () => {
      dialogVisible.value = false;
      if (Object.keys(props.initialData).length) {
        // 编辑
        store.dispatch("mainModule/updateRowData", {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherData },
          id: props.initialData.id
        });
      } else {
        // 新建
        store.dispatch("mainModule/createRowData", {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherData }
        });
      }
      // 重新请求数据
      // emit("confirmBtnClick");
    };

    return {
      isEditPage,
      modalTitle,
      dialogVisible,
      formData,
      handleConfirmClick
    };
  }
});
</script>

<style scoped></style>
