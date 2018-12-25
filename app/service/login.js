const Service = require('egg').Service;

class LoginService extends Service {
  async index({identifier, token, authType}) {
    const {app, ctx, ctx: {helper} } = this
    const squelMysql = helper.squelMysql
    const tokenMD5 = helper.md5passwdSalt(token)
    let res = {
      flag: false,
      msg: ''
    }

    const condition = squelMysql.expr()
      .and('u.id=a.id AND u.status=1 AND a.status=1')
      .and('u.user_name=? AND auth_type=?', identifier, authType)
      .toString()
    const querySql = squelMysql.select()
      .field('u.id')
      .field('u.user_name')
      .field('a.auth_type')
      .field('a.token')
      .from('users', 'u')
      .join('user_auths', 'a', condition)
      .toString()

    const userList = await app.mysql.query(querySql);
    if (userList[0].token === tokenMD5) {

    }
    console.log(user);
    return user
  }
}

module.exports = LoginService;
