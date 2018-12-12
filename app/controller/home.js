'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    console.log(app.middleware)
    this.ctx.body = 3;
  }
}

module.exports = HomeController;
