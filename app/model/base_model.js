const _ = require('lodash');

module.exports = class BaseModel{
  constructor(ctx, ...args) {
    this.ctx = ctx
  }
  static get _() {
    return _
  }
  get squelMysql() {
    return this.ctx.helper.squelMysql
  }
  get mysqlDb() {
    return this.ctx.app.mysql
  }
  get helper() {
    return this.ctx.helper
  }
}
