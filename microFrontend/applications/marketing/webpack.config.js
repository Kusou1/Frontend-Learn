const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJSON = require("./package.json");

module.exports = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8081/",
  },
  devServer: {
    port: 8081,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            // 1. 避免 babel 转义语法后 helper 函数重复
            // 2. 避免 babel polyfill 将 API 添加到全局
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      // 导出列表
      exposes: {
        "./MarketingApp": "./src/bootstrap.js",
      },
      shared: packageJSON.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
