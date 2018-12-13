'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;
    ctx.session.id = 123
    ctx.session.user = 123
    ctx.body = 'hello';
  }
}

module.exports = HomeController;
