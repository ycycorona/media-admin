'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const {ctx, service} = this;
    const loginParamsRules = {
      userName: {type: 'string'},
      passwd: {type: 'string'}
    }
    console.log(JSON.stringify(ctx.request.body))
    ctx.body = 123;
  }
}

module.exports = LoginController;
