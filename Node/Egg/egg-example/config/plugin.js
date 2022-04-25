'use strict';

/** 
 * 配置插件
 * @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  nunjucks:{
    enable:true,
    package: 'egg-view-nunjucks'
  }
};
