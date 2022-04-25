/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1611716016238_6422'

  // add your middleware config here
  config.middleware = ['errorHandler']

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/youtube-clone',
      options: {
        useUnifiedTopology: true
      },
      // mongoose global plugins, expected a function or an array of function and options
      plugins: []
    }
  }

  config.security = {
    csrf: {
      enable: false
    }
  }

  config.jwt = {
    secret: 'a6e8561e-58df-4715-aa21-b5d1a091e71a',
    expiresIn: '1d'
  }

  config.cors = {
    origin: '*'
    // {string|Function} origin: '*',
    // {string|Array} allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }

  return {
    ...config,
    ...userConfig
  }
}
