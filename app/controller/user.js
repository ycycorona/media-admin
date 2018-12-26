'use strict';
const Base = require('../core/base_controller');
class LoginController extends Base {
  // 登录成功
  async loginSuccess() {
    const {ctx, service} = this;
    const flag = ctx.isAuthenticated() // 再次确认一下授权信息
    if (flag) {
      ctx.body = ctx.successRes(flag);
    } else {
      ctx.body = ctx.failRes({status: '0', error: '1002', msg: 'no login info'});
    }
  }

  // 登录失败
  async loginFail() {
    const {ctx} = this;
    ctx.body = ctx.failRes({status: '0', error: '1001', msg: ctx.session.passportFailMsg});
  }

  // 登出
  async logout() {
    const {ctx} = this;
    ctx.logout()
    ctx.body = ctx.successRes('logout')
  }

  // 获取用户信息
  async getUserInfo() {
    const {ctx} = this;
    ctx.body = ctx.user
  }
}

module.exports = LoginController;
