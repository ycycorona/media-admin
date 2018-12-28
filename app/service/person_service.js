const Service = require('egg').Service;
const nanoid = require('nanoid')
class UserService extends Service {
  constructor(ctx) {
    super(ctx);
  }
  get personModel() {
    return new (require('../model/person.js'))(this.ctx);
  }
  async create(personParams) {
    //const uid =
    const personCreateServiceRes = {
      flag: false,
      error: '',
      errorMsg: '',
      data: {},
    };
    const personCreateModelRes = await this.ctx.personModel.thenAdd(personParams, [idJavbus,])
  }

}

module.exports = UserService;
