'use strict';
const Base = require('../core/base_controller');
class PersonController extends Base {
  async index() {
    const { ctx } = this;
    ctx.body = 'home';
  }

  async create() {
    const { ctx } = this;
    const userRule = {
      name: { type: 'string' },
      gender: { type: 'int', required:false, convertType: 'int'},
      enName: { type: 'string', required:false},
      cnName: { type: 'string', required:false},
      birthday: { type: 'date', required:false},
      nation: { type: 'string', required:false},
      idJavbus: { type: 'string', required:false},
    }
    ctx.validate(userRule)

    const personCreateServiceRes =  await ctx.service.personService.create(ctx.request.body)
    if (personCreateServiceRes.flag) {
      ctx.body = ctx.successRes(personCreateServiceRes.data)
    } else {
      ctx.body = ctx.failRes({msg: personCreateServiceRes.errorMsg})
    }

  }
}

module.exports = PersonController;
