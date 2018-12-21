'use strict';
// Document：https://www.yuque.com/easy-team/easywebpack 和 https://www.yuque.com/easy-team/egg-vue 
module.exports = {
  plugins: {
    imagemini: false,
    entry: {
      app: 'app/web/page/index/main.js',   // js 文件需要自己实现 vue mouted 逻辑
    }
  }
};