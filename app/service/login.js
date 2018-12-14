const Service = require('egg').Service;

class LoginService extends Service {
  async index({userName, token}) {
    const user = await this.app.mysql.get('users', { user_name: userName });
/*    const user = await this.ctx.model.User.findOne({
      where: {user_name: 'root'},
      attributes: ['id', ['create_time', 'update_time']]
    })*/
    console.log(user);
    //console.log((await this.ctx.model.UserAuth.findByPk(1)).dataValues);
    //this.ctx.helper.md5passwdSalt(passwd)
    return user
  }
}

module.exports = LoginService;
