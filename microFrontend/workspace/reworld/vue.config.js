const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.externals(["single-spa"]);
  },
  configureWebpack: {
    output: {
      libraryTarget: "system",
    },
  },
});
