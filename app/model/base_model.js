const _ = require('lodash');
const squel = require("squel");

module.exports = class BaseModel{
  constructor(ctx, ...args) {
    this.ctx = ctx
    this.squel = squel.useFlavour('mysql')
  }
  static get _() {
    return _
  }
  get mysqlDb() {
    return this.ctx.app.mysql
  }
  get helper() {
    return this.ctx.helper
  }
}
