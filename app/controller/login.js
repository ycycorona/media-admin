'use strict';
const BaseCon = require('../core/base_controller');
class LoginController extends BaseCon {
  async index() {
    const {ctx, service} = this;

    const loginParamsRules = {
      userName: {type: 'string'},
      token: {type: 'string'}
    }

    /*ctx.validate(loginParamsRules)
      .catch((error) => {
        console.log(error)
      })*/
    const result = await service.login.index(ctx.request.body)



    ctx.body = BaseCon.successRes(result);
  }
}

module.exports = LoginController;
