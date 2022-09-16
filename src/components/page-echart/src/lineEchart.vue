<template>
  <div class="line-echart">
    <base-echart :options="lineOptions"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import BaseEchart from "@/base-ui/echart";
import type { EChartsOption } from "echarts";

const props = defineProps<{
  xAxisData: string[];
  lineData: any[];
}>();

const lineOptions = computed<EChartsOption>(() => {
  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985"
        }
      }
    },
    legend: {},
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: props.xAxisData
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "销量",
        type: "line",
        stack: "Total",
        label: {
          show: true,
          position: "top"
        },
        areaStyle: {},
        emphasis: {
          focus: "series"
        },
        data: props.lineData
      }
    ]
  };
});
</script>

<style scoped></style>
