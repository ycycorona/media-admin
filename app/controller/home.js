'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.renderClient('index/index.js', 123);
  }
}

module.exports = HomeController;
