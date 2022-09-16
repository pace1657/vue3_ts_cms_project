import * as echarts from "echarts";
import chinaMapData from "../data/china.json";

echarts.registerMap("china", chinaMapData);

export default function (el: HTMLElement) {
  const echartsInstance = echarts.init(el);

  const setOptions = (options: echarts.EChartsOption) => {
    echartsInstance.setOption(options);
  };

  window.addEventListener("resize", () => {
    echartsInstance.resize();
  });

  const updateSize = () => {
    echartsInstance.resize();
  };

  return {
    echartsInstance,
    setOptions,
    updateSize
  };
}
