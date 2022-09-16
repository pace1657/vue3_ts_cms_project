<template>
  <div class="bar-echart">
    <base-echart :options="barOptions"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from "vue";
import BaseEchart from "@/base-ui/echart";
import * as echarts from "echarts";

const props = withDefaults(
  defineProps<{
    title?: string;
    xAxisData: string[];
    barData: any[];
  }>(),
  {
    title: "支持鼠标滚动缩放"
  }
);
const barOptions = computed<echarts.EChartsOption>(() => {
  return {
    title: {
      text: props.title
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: {
      data: props.xAxisData,
      axisLabel: {
        inside: true,
        color: "#fff"
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#999"
      }
    },
    dataZoom: [
      {
        type: "inside"
      }
    ],
    series: [
      {
        type: "bar",
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#83bff6" },
            { offset: 0.5, color: "#188df0" },
            { offset: 1, color: "#188df0" }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#2378f7" },
              { offset: 0.7, color: "#2378f7" },
              { offset: 1, color: "#83bff6" }
            ])
          }
        },
        data: props.barData
      }
    ]
  };
});
</script>

<style scoped></style>
