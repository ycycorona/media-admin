'use strict';
const path = require('path');
const fs = require('fs');

module.exports = appInfo => {
  const config = exports = {};

  exports.view = {
    cache: false
  };

  exports.development = {
    watchDirs: [], // 指定监视的目录（包括子目录），当目录下的文件变化的时候自动重载应用，路径从项目根目录开始写
    ignoreDirs: ['app/web', 'public'] // 指定过滤的目录（包括子目录）
  };

  exports.logview = {
    dir: path.join(appInfo.baseDir, 'logs')
  };

  exports.webpack = {
    // browser: 'http://localhost:7001',
    // webpackConfigList: require('easywebpack-vue').getWebpackConfig()
  };


  return config;
};
