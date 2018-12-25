'use strict';
const Base = require('../core/base_controller');
class LoginController extends Base {
  async login() {
    const {ctx, service} = this;

    const loginParamsRules = {
      identifier: {type: 'string'},
      token: {type: 'string'},
      authType: {type: 'string'}
    }

    ctx.validate(loginParamsRules)

    const result = await service.login.index(ctx.request.body)
    if (result) {
      ctx.body = Base.successRes('login success');
    } else {
      ctx.body = Base.failRes({status: '0', error: '1001', msg: 'login fail'});
    }
  }
}

module.exports = LoginController;
