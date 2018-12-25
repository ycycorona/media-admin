'use strict'
const { Controller } = require('egg');
class BaseController extends Controller {
  static successRes(data) {
    return {
      status: '1',
      data,
      msg: 'success',
      error: '',
    };
  }

  static failRes({status='0', error='1000', msg='fail'}) {
    return {
      status,
      data: null,
      msg,
      error,
    };
  }

}
module.exports = BaseController;
