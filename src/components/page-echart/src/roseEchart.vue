<template>
  <div class="rose-echart">
    <base-echart :options="roseOptions"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import BaseEchart from "@/base-ui/echart";
import type { EChartsOption } from "echarts";
import type { IRoseEchartData } from "../types";

const props = defineProps<{
  roseData: IRoseEchartData[];
}>();

const roseOptions = computed<EChartsOption>(() => {
  return {
    tooltip: {
      trigger: "item"
    },
    legend: {
      top: "bottom"
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: "分类数据",
        type: "pie",
        radius: [10, 120],
        center: ["50%", "50%"],
        roseType: "radius",
        itemStyle: {
          borderRadius: 5
        },
        label: {
          show: false
        },
        emphasis: {
          label: {
            show: true
          }
        },
        data: props.roseData
      }
    ]
  };
});
</script>

<style scoped></style>
