<template>
  <div class="base-form">
    <div class="base-form-header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <template v-if="!item.isHidden">
              <el-form-item :label="item.label" :rules="item.rules" :style="itemStyle">
                <template v-if="item.type === 'string' || item.type === 'password'">
                  <el-input
                    :placeholder="item.placeholder"
                    :show-password="item.type === 'password'"
                    v-bind="item.otherOptions"
                    :model-value="modelValue[`${item.filed}`]"
                    @update:model-value="modelValueChange($event, item.filed)"
                  ></el-input>
                </template>
                <template v-else-if="item.type === 'select'">
                  <el-select
                    :placeholder="item.placeholder"
                    style="width: 100%"
                    v-bind="item.otherOptions"
                    :model-value="modelValue[`${item.filed}`]"
                    @update:model-value="modelValueChange($event, item.filed)"
                  >
                    <template v-for="option in item.selectOptions" :key="option.value">
                      <el-option :label="option.title" :value="option.value" />
                    </template>
                  </el-select>
                </template>
                <template v-else-if="item.type === 'datepicker'">
                  <el-date-picker
                    v-bind="item.otherOptions"
                    :model-value="modelValue[`${item.filed}`]"
                    @update:model-value="modelValueChange($event, item.filed)"
                  ></el-date-picker>
                </template>
              </el-form-item>
            </template>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="base-form-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import type { IFormItem } from "../types";

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: "100px"
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: "10px 30px" })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xs: 24,
        sm: 24,
        md: 12,
        lg: 8,
        xl: 8
      })
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    // const formData = ref({ ...props.modelValue });
    // watch(
    //   formData,
    //   (newValue) => {
    //     emit("update:modelValue", newValue);
    //   },
    //   { deep: true }
    // );
    const modelValueChange = (value: any, filed: string) => {
      emit("update:modelValue", { ...props.modelValue, [filed]: value });
    };

    return {
      // formData
      modelValueChange
    };
  }
});
</script>

<style scoped>
.base-form {
  padding-top: 18px;
}
</style>
