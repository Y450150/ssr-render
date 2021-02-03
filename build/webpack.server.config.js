const path = require("path");
const merge = require("webpack-merge");
const base = require("./webpack.base.config");
// 用来打包生成的服务器端的bundle
// 最终可以将所有文件打包成一个json文件,最终传给服务器renderer使用。
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");

function resolve(name) {
  return path.resolve(__dirname, "..", name);
}

module.exports = merge(base, {
  target: "node",
  mode: 'production',
  // entry-server.js 作为入口
  entry: resolve("app/entry-server.js"),
  output: {
    libraryTarget: "commonjs2"
  },
  plugins: [new VueSSRServerPlugin()]
});