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

    const result = await service.login.index(ctx.request.body)
    if (result) {
      ctx.body = BaseCon.successRes('login success');
    } else {
      ctx.body = BaseCon.failRes('login fail');
    }
  }
}

module.exports = LoginController;
