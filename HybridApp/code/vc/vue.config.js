module.exports = {
  outputDir: 'www',
  publicPath: './',
  devServer: {
    proxy: {
      '/news': {
        target: 'http://v.juhe.cn',
        changeOrigin: true,
        pathRewrite: {
          "^/news": ""
        }
      },
      "/weather" : {
        target: 'https://devapi.qweather.com/v7/weather',
        changeOrigin: true,
        pathRewrite: {
          "^/weather": ""
        }
      }
    }
  }
}