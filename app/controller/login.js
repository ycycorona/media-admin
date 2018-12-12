'use strict';
const BaseController = require('../core/base_controller');
class LoginController extends BaseController {
  async index() {
    const {ctx, service} = this;

    const loginParamsRules = {
      userName: {type: 'string'},
      passwd: {type: 'string'}
    }
    ctx.validate(loginParamsRules);

    const result = await service.login.index(ctx.request.body)

    ctx.body = BaseController.successRes(result);
  }
}

module.exports = LoginController;
