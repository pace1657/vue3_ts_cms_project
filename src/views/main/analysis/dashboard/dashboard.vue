<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <base-card cardTitle="分类商品数量(饼图)">
          <pie-echart :pieData="goodsCategoryCount"></pie-echart>
        </base-card>
      </el-col>
      <el-col :span="10">
        <base-card cardTitle="不同城市商品销量">
          <map-echart :mapData="goodsAddressSale"></map-echart>
        </base-card>
      </el-col>
      <el-col :span="7">
        <base-card cardTitle="分类商品数量(玫瑰图)">
          <rose-echart :roseData="goodsCategoryCount"></rose-echart>
        </base-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <base-card cardTitle="分类商品的销量">
          <line-echart v-bind="goodsCategorySale"></line-echart>
        </base-card>
      </el-col>
      <el-col :span="12">
        <base-card cardTitle="分类商品的收藏">
          <bar-echart v-bind="goodsCategoryFavor"></bar-echart>
        </base-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import BaseCard from "@/base-ui/card";
import { PieEchart, RoseEchart, LineEchart, BarEchart, MapEchart } from "@/components/page-echart";

export default defineComponent({
  name: "dashboard",
  components: {
    BaseCard,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart
  },
  setup() {
    const store = useStore();
    store.dispatch("dashboardModule/getDashboardDataAction");

    const goodsCategoryCount = computed(() => {
      return store.state.dashboardModule.goodsCategoryCount.map((item: any) => {
        return { value: item.goodsCount, name: item.name };
      });
    });
    const goodsCategorySale = computed(() => {
      const xAxisData: string[] = [];
      const lineData: any[] = [];
      const originData = store.state.dashboardModule.goodsCategorySale;
      for (const item of originData) {
        xAxisData.push(item.name);
        lineData.push(item.goodsCount);
      }

      return {
        xAxisData,
        lineData
      };
    });
    const goodsCategoryFavor = computed(() => {
      const xAxisData: string[] = [];
      const barData: any[] = [];
      const originData = store.state.dashboardModule.goodsCategoryFavor;
      for (const item of originData) {
        xAxisData.push(item.name);
        barData.push(item.goodsFavor);
      }
      return {
        xAxisData,
        barData
      };
    });
    const goodsAddressSale = computed(() => {
      return store.state.dashboardModule.goodsAddressSale.map((item: any) => {
        return { value: item.count, name: item.address };
      });
    });

    return {
      goodsCategoryCount,
      goodsCategorySale,
      goodsCategoryFavor,
      goodsAddressSale
    };
  }
});
</script>

<style scoped lang="less">
.el-row {
  margin-bottom: 10px;
}
</style>
