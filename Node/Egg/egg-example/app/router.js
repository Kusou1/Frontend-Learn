'use strict';


/**
 * Egg.js 应用中的路由配置模块
 * @param {Egg.Application} app - egg application
 */
// app/router.js
module.exports = (app) => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
};