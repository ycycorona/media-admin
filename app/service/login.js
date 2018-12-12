const Service = require('egg').Service;

class LoginService extends Service {
  async index({userName, passwd}) {
    const user = await this.app.mysql.get('users', { user_name: userName });

    return this.ctx.helper.md5asswdSalt(passwd);
  }
}

module.exports = LoginService;
