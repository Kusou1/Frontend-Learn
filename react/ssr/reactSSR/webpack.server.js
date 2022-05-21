const path = require('path');
// webpack合并工具
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
// 我们本身这个项目就是运行在node环境下的，在打包过程中，还是包含了Node系统模块，导致打包文件体积庞大
// 通过webpack-node-externals可以剔除打包文件中的Node模块
const nodeExternals = require('webpack-node-externals');

const config = {
  target: 'node',
  entry: './src/server/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  // 调用nodeExternals剔除打包文件中的Node模块，优化打包产物体积
  externals: [nodeExternals()]
}

// 合并配置，并导出合并结果
module.exports = merge(baseConfig, config);


// 合并项目启动命令 目的: 使用一个命令启动项目, 解决多个命令启动的繁琐问题. 通过 npm-run-all 工具实现.