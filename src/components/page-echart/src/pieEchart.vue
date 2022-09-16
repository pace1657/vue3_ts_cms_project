<template>
  <div class="pie-echart">
    <base-echart :options="pieOptions"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import BaseEchart from "@/base-ui/echart";
import type { EChartsOption } from "echarts";
import type { IPieEchartData } from "../types";

const props = defineProps<{
  pieData: IPieEchartData[];
}>();

const pieOptions = computed<EChartsOption>(() => {
  return {
    tooltip: {
      trigger: "item"
    },
    legend: {
      orient: "horizontal",
      left: "left"
    },
    series: [
      {
        name: "分类数据",
        type: "pie",
        radius: "50%",
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };
});
</script>

<style scoped></style>
