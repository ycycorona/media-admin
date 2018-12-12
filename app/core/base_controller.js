'use strict'
const { Controller } = require('egg');
class BaseController extends Controller {
  static successRes(data) {
    return {
      status: '1',
      error: null,
      msg: 'success',
      data,
    };
  }

  static failRes({status='0', error='0', msg='fail'}) {
    return {
      status, error, msg,
      data: null
    };
  }

}
module.exports = BaseController;
