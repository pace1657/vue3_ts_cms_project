<template>
  <div class="base-echart">
    <div ref="echartsDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect, defineProps, withDefaults } from "vue";
import { EChartsOption } from "echarts";
import useEchart from "../hooks/useEchart";

const props = withDefaults(
  defineProps<{
    options: EChartsOption;
    width?: string;
    height?: string;
  }>(),
  {
    width: "100%",
    height: "360px"
  }
);

const echartsDivRef = ref<HTMLElement>();
onMounted(() => {
  const { setOptions } = useEchart(echartsDivRef.value as HTMLElement);
  watchEffect(() => {
    setOptions(props.options);
  });
});
</script>

<style scoped></style>
