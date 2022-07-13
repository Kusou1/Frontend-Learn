const singleSpaDefaults = require("webpack-config-single-spa");
const { merge } = require("webpack-merge");

module.exports = () => {
  // singleSpa配置
  const defaultConfig = singleSpaDefaults({
    orgName: "study", // 组织名称
    projectName: "lagou", // 项目名称
  });
  return merge(defaultConfig, {
    devServer: {
      port: 9001,
    },
  });
};
