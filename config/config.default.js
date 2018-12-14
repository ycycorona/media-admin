'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1544496710762_6467';

  // add your config here
  config.middleware = [ 'notfoundHandler' ];


  config.sequelize = {
    dialect: 'mysql',
    host: '47.105.46.120',
    user: 'root',
    password: 'ycy6323892',
    port: 3306,
    database: 'media_db',
    define: {
      timestamps: false,
      freezeTableName: true,
      underscored: true,
    },
  };

  config.mysql = {
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

  config.logger = {
    //dir: '/path/to/your/custom/log/dir', // 自定义日志路径
  };

  config.bodyParser = {
    jsonLimit: '1mb', //上传json文件的大小限制
    formLimit: '1mb',
  }

  config.multipart = {
    mode: 'file',
  }
  // 全局异常处理 其中404要单独处理
  config.onerror = {
    /*all(err, ctx) {
      // 在此处定义针对所有响应类型的错误处理方法
      // 注意，定义了 config.all 之后，其他错误处理方法不会再生效
      ctx.body = 'error';
      ctx.status = 500;
    },*/
/*    html(err, ctx) {
      // html hander
      ctx.body = '<h3>error</h3>';
      ctx.status = 500;
    },*/
    json(err, ctx) {
      console.log(err)
      // json hander
      ctx.body = { msg: 'uncaught json request error', status: '0', error: '-110' };
      switch (err.code) {
        case 'invalid_param':
          ctx.body.msg = 'params invalid'
          ctx.body.error = '-111'
          break
        default:
          break
      }
      console.log(err)
      ctx.status = 500;
    },
/*    jsonp(err, ctx) {
      // 一般来说，不需要特殊针对 jsonp 进行错误定义，jsonp 的错误处理会自动调用 json 错误处理，并包装成 jsonp 的响应格式
    },*/
  }

  config.security = {
    csrf: {
      enable: false,
      useSession: true, // 默认为 false，当设置为 true 时，将会把 csrf token 保存到 Session 中
      //cookieName: 'csrfToken', // Cookie 中的字段名，默认为 csrfToken
      sessionName: 'csrfToken', // Session 中的字段名，默认为 csrfToken
    },
  }

  exports.session = {
    key: '_sSS_store',
    maxAge: 4 * 3600 * 1000, // 4小时
    renew: true, // 自动续期
    httpOnly: true,
    encrypt: true,
  };

  return config;
};
