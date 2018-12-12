'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;
    ctx.rotateCsrfSecret();
    console.log(ctx.session)
    ctx.body = 'hello';
  }
}

module.exports = HomeController;
