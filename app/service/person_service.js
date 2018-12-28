const Service = require('egg').Service;
const nanoid = require('nanoid')
const PersonEntity = require('../model/entity/Person.js')
const personServiceDebug = require('debug')('personService')

class UserService extends Service {
  constructor(ctx) {
    super(ctx);
  }

  get personModel() {
    return new (require('../model/person.js'))(this.ctx, {tableName: 'persons', Entity: PersonEntity});
  }

  async create(personParams) {
    personServiceDebug(personParams)
    //const uid =
    const {squel} = this.ctx.helper
    const personCreateServiceRes = {
      flag: false,
      error: '',
      errorMsg: '',
      data: {},
    }

    let isExist = false
    // 防止uid重复
    let uid
    do {
      uid = this.ctx.helper.nanoid()
      const uidWhereSql = squel.expr()
        .and('uid = ?', uid)
      isExist = await this.personModel.checkExist(uidWhereSql)
    } while (isExist)
    personParams.uid = uid
    // 检测idpJavbus重复
    if (personParams.idpJavbus) {
      const idpJavbusWhereSql = squel.expr()
        .and('idp_javbus = ?', personParams.idpJavbus)
      isExist = await this.personModel.checkExist(idpJavbusWhereSql)
    } else {
      delete personParams.idpJavbus
    }
    // 如果重复
    if (isExist) {
      personCreateServiceRes.errorMsg = 'idp_javbus重复，无法创建'
      return personCreateServiceRes
    }

    try {
      const insertRes = await this.personModel.insertRow(personParams)

      if (insertRes) {
        personCreateServiceRes.flag = true
        personCreateServiceRes.data.insertId = insertRes.insertId
      } else {
        personCreateServiceRes.errorMsg = insertRes
      }
    } catch (err) {
      personCreateServiceRes.errorMsg = err.message
    }

    return personCreateServiceRes
  }

}

module.exports = UserService;
