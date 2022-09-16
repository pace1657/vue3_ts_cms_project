<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  <div class="app">
    <!-- <h2>{{ vuexMessage }}</h2>
    <router-link to="/login">登录</router-link>
    <router-link to="/main">首页</router-link>
    <router-view></router-view> -->

    <!-- elementUI组件 -->
    <!-- <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button> -->
    <el-config-provider :locale="local">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// 组件国际化
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
// import HelloWorld from "./components/HelloWorld.vue";
// 使用别名components
// import HelloWorld from "components/HelloWorld.vue";
// import { useStore } from "vuex";

// 局部引入elementUI组件
// import { ElButton } from "element-plus";
// 局部引入样式可以通过babel-plugin-import插件(以下是手动引入)
// import "element-plus/theme-chalk/el-button.css";
// import "element-plus/theme-chalk/base.css";

export default defineComponent({
  name: "App",
  setup() {
    // const store = useStore();
    // const vuexMessage = store.state.message;

    return {
      // vuexMessage
      local: zhCn
    };
  },
  components: {
    // HelloWorld
    // ElButton
    ElConfigProvider
  }
});
</script>

<style lang="less">
// #app {
// font-family: Avenir, Helvetica, Arial, sans-serif;
// -webkit-font-smoothing: antialiased;
// -moz-osx-font-smoothing: grayscale;
// text-align: center;
// color: #2c3e50;
// margin-top: 60px;
// }
.app {
  width: 100%;
  height: 100%;
}
</style>
