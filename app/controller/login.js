'use strict';
const BaseCon = require('../core/base_controller');
class LoginController extends BaseCon {
  async index() {
    const {ctx, service} = this;

    const loginParamsRules = {
      userName: {type: 'string'},
      token: {type: 'string'}
    }

    ctx.validate(loginParamsRules)

    const res = await service.login.index(ctx.request.body)

    if (res.flag) {
      ctx.body = BaseCon.successRes('login success');
      ctx.logger.info('登陆成功')
    } else {
      ctx.body = BaseCon.failRes({msg: res.msg});
    }
  }
}

module.exports = LoginController;
