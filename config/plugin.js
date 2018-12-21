'use strict';

// had enabled by egg
// exports.static = true;

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

exports.validate = {
  enable: true,
  package: 'egg-validate',
};

exports.webpack = {
  enable: true,
  package: 'egg-webpack'
};

exports.webpackvue = {
  enable: true,
  package: 'egg-webpack-vue'
};

exports.vuessr = {
  enable: true,
  package: 'egg-view-vue-ssr'
};

exports.logview = {
  package: 'egg-logview',
  env: ['local']
};

/*exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};*/
