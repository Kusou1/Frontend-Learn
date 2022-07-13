module.exports = {
  configureWebpack: {
    output: {
      libraryTarget: "system",
    },
  },
  chainWebpack: (config) => {
    config.externals(["vue", "vue-router", "single-spa"]);
  },
};
