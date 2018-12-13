const Service = require('egg').Service;

class LoginService extends Service {
  async index({userName, passwd}) {
    //const user = await this.app.mysql.get('users', { user_name: userName });
    console.log((await this.ctx.model.User.findByPk(1)).dataValues);
    console.log((await this.ctx.model.UserAuths.findByPk(1)).dataValues);
    return this.ctx.helper.md5passwdSalt(passwd);
  }
}

module.exports = LoginService;
