const _ = require('lodash');
const squel = require('squel');
const thinkHelper = require('think-helper');

module.exports = class BaseModel {
  constructor(ctx, option={}) {
    this.ctx = ctx
    this.tableName = option.tableName || this.helper.snakeCase(this.constructor.name)
    this.entity = option.entity || null
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
  /**
   * 插入一条
   * @param insertObj {Object | Object[]}
   * @returns {Promise<*>}
   */
  async insertRow(insertObj) {
    let entityObj = new this.entity(insertObj)
    return await this.mysqlDb.insert(this.tableName, entityObj);
  }
  /**
   * 插入多条
   * @param insertArray {Object[]}
   * @returns {Promise<*>}
   */
  async insertRows(insertArray = []) {
    const entityArray = []
    insertArray.forEach((item) => {
      entityArray.push(new this.entity(item))
    })
    return await this.mysqlDb.insert(this.tableName, entityArray);
  }
  /**
   * 更新数据
   * @param row {Object} 要更新的字段
   * @param option 包含where where: { status: 'draft', author: ['author1', 'author2'] }, // WHERE 条件
   * @returns {Promise<*>}
   */
  async updateRow(row, option) {
    const entityObj = new this.entity(row)
    return await this.mysqlDb.update(this.tableName, entityObj, option);
  }

  /**
   * 更新多行
   * @param rows {Object[]}
   * @returns {Promise<*>}
   */
  async updateRows(rows = []) {
    const entityArray = []
    rows.forEach((item) => {
      if(item.row) {
        entityArray.push(Object.assign({}, item, {row: new this.entity(item.row)}))
      }
    })
    return await this.mysqlDb.updateRows(this.tableName, entityArray);
  }
  /**
   * 删除数据
   * @param option 包含where where: { status: 'draft', author: ['author1', 'author2'] }, // WHERE 条件
   * @returns {Promise<void>}
   */
  async delete(option) {
    return await this.mysqlDb.delete(this.tableName, new this.entity(option));
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


