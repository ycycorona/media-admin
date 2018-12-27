'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  const localStrategy = app.passport.authenticate('local', {
    successRedirect: '/user/passport/local/success',
    failureRedirect: '/user/passport/local/fail',
  });
  router.get('/', controller.home.index);
  router.post('/user/register', controller.user.register); // 注册
  router.post('/user/passport/local', localStrategy); // 登录
  router.get('/user/passport/logout', controller.user.logout); // 登出
  router.get('/user/passport/local/success', controller.user.loginSuccess); // 登陆成功跳转
  router.get('/user/passport/local/fail', controller.user.loginFail); // 登录失败跳转
  router.get('/user/info', controller.user.getUserInfo); // 获取用户信息
  router.get('/admin/user/info/:userName', controller.user.getUserInfoByUserName); // 根据用户名获取用户信息
};

