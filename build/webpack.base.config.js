const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  output: {
    // 打包到根目录下 `dist` 文件夹
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    filename: "[name].[chunkhash].js"
  },
  module: {
    // 解析 .vue 文件
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};