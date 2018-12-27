const _ = require('lodash');
const squel = require('squel');

module.exports = class BaseModel {
  constructor(ctx, option={}) {
    this.tableName = option.tableName || this.helper.snakeCase(this.constructor.name)
    this.ctx = ctx
    this.squel = squel.useFlavour('mysql')
  }
  // 查询一条数据
  async find(queryObj) {
    return await this.mysqlDb.get(this.tableName, queryObj);
  }
  // 条件查询
  async select(queryObj) {
    return await this.mysqlDb.select(this.tableName, queryObj);
  }
  // 插入
  async insert(insertObj) {
    return await this.mysqlDb.insert(this.tableName, insertObj);
  }
  /**
   * 更新数据
   * @param cols 要更新的字段
   * @param option 包含where where: { status: 'draft', author: ['author1', 'author2'] }, // WHERE 条件
   * @returns {Promise<*>}
   */
  async update(cols, option) {
    return await this.mysqlDb.update(this.tableName, cols, option);
  }
  /**
   * 删除数据
   * @param option 包含where where: { status: 'draft', author: ['author1', 'author2'] }, // WHERE 条件
   * @returns {Promise<void>}
   */
  async delete(option) {
    await await this.mysqlDb.delete(this.tableName, option);
  }
  static get _() {
    return _
  }
  get mysqlDb() {
    return this.ctx.app.mysql.get('media_db')
  }
  get helper() {
    return this.ctx.helper
  }
};


