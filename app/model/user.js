const BaseModel = require('./base_model')

const user = new (require('./entity/User.js'))()
const auth = new (require('./entity/Auth.js'))()
module.exports = class UserModel extends BaseModel {
  constructor(...args) {
    super(...args)
  }
  async selectUserAuth(authType, identifier) {
    const querySql = this.squelMysql.select()
      .field('u.user_name')
      .field('u.avatar')
      .field('u.nick_name')
      .field('u.status', 'status_user')
      .field('a.id_user')
      .field('a.auth_type')
      .field('a.identifier')
      .field('a.token')
      .field('a.status', 'status_auth')
      .from('users', 'u')
      .join(
        super.squelMysql.select().from('user_auths', 'a')
          .where(
            'a.identifier=? AND a.auth_type=?', identifier, authType
          ), 'a', 'u.id = a.id_user'
      )
      .toString()
    console.log(querySql)
    const resList = await this.mysqlDb.query(querySql)
    return this.helper.isEmpty(resList) ? null : resList[0]
  }
}
