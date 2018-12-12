'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1544496710762_6467';

  // add your config here
  config.middleware = [];

  exports.mysql = {
    // database configuration
    client: {
      // host
      host: '47.105.46.120',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'ycy6323892',
      // database
      database: 'media_db',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  exports.logger = {
    //dir: '/path/to/your/custom/log/dir', // 自定义日志路径
  };

  config.security = {
    csrf: {
      enable: false,
      useSession: true, // 默认为 false，当设置为 true 时，将会把 csrf token 保存到 Session 中
      //cookieName: 'csrfToken', // Cookie 中的字段名，默认为 csrfToken
      sessionName: 'csrfToken', // Session 中的字段名，默认为 csrfToken
    },
  }
  return config;
};
