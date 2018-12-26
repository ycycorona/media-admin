const loginRulesLocal = require('../validate_rules').loginRulesLocal
module.exports = (ctx, user) => {
  ctx.validate(loginRulesLocal)
  // todo 鉴权
  return user
}
