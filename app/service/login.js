const Service = require('egg').Service;

class LoginService extends Service {
  async index({userName, token, authType}) {
    const {ctx} = this
    return await ctx.model.User.findAll()
  }
}

module.exports = LoginService;
