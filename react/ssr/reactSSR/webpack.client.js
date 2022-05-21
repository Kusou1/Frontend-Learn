const path = require("path");
// webpack合并工具
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  entry: "./src/client/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  }
};

module.exports = merge(baseConfig, config);
