<template>
  <div class="menuManage">
    <page-content :contentTableConfig="contentTableConfig" pageName="menu"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageContent from "@/components/page-content";
import { contentTableConfig } from "./config/content.config";

export default defineComponent({
  name: "menuManage",
  components: {
    PageContent
  },
  setup() {
    return {
      contentTableConfig
    };
  }
});
</script>

<style scoped>
.page-search,
.page-content {
  background-color: #fff;
  border-radius: 3px;
}
.page-search {
  margin-bottom: 20px;
}
.page-content {
  padding: 10px 20px;
}
</style>
