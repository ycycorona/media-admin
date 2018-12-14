'use strict'
const { Controller } = require('egg');
class BaseController extends Controller {
  static successRes(data) {
    return {
      status: '1',
      data,
      msg: 'success',
      error: null,
    };
  }

  static failRes({status='0', error='0', msg='fail'}) {
    return {
      status,
      data: null,
      msg,
      error,
    };
  }

}
module.exports = BaseController;
