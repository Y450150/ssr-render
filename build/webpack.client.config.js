// webpack.client.config.js
const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path")
const base = require("./webpack.base.config");
// 类似于VueSSRServerPlugin插件
// 主要的作用就是将前端的代码打包成bundle.json,然后传值给renderer
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");

function resolve(name) {
  return path.resolve(__dirname, "..", name);
}

module.exports = merge(base, {
  mode: 'production',
  entry: {
    app: [resolve("app/entry-client.js")]
  },
  plugins: [
    // extract vendor chunks for better caching
    new VueSSRClientPlugin(),
  ],
  optimization: {
    // 我们需要将运行环境提取到一个单独的 manifest 文件中
    runtimeChunk: {
      name: "mainifest"
    },
    // 相当于以前的 CommonsChunkPlugin 插件
    // 拆分 node_modules 代码形成 vendors.[hash].js 文件
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      name: true,
      cacheGroups: {
        vendor: {
          test: /node_modules\/(.*)\.js/,
          name: "vendors",
          chunks: "initial",
          priority: -10,
          reuseExistingChunk: false
        }
      }
    }
  }
});