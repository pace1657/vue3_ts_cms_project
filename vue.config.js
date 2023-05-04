// const path = require("path");

// 自动引入element-plus
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

// 按需引入样式
// const ElementPlus = require("unplugin-element-plus/webpack");

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  // publicPath: "./",
  transpileDependencies: true,
  // 配置方式一: CLI提供的属性, 和webpack的属性是一一对应的
  // outputDir: "./build",
  devServer: {
    proxy: {
      "^/api": {
        target: "http://123.207.32.32:5000",
        pathRewrite: {
          "^/api": ""
        },
        changeOrigin: true
      }
    }
  },
  // 配置方式二: 和webpack的属性完全一致, 会进行合并
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components"
      }
    },
    // 自动引入element-plus插件配置
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
      // ElementPlus()
    ]
  }
  // configureWebpack: (config) => {
  //   // config中包含webpack的所有配置
  //   config.resolve.alias = {
  //     "@": path.resolve(__dirname, "src"),
  //     components: "@/components"
  //   };
  // }
  // 配置方式三: 链式编程
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set("@", path.resolve(__dirname, "src"))
  //     .set("components", "@/components");
  // }
});
