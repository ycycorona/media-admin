const loginRulesLocal = require('../validate_rules').loginRulesLocal

module.exports = async (ctx, user) => {
  const userModel = new (require('../../model/user.js'))(ctx)
  const reqTokenMd5 = ctx.helper.md5passwdSalt(user.password)
  ctx.validate(loginRulesLocal)

  const loginRes = {
    flag: false,
    errorData: '',
  }

  const userAuthInfo = await userModel.selectUserAuth('passwd', user.username)
  if (!userAuthInfo) {
    loginRes.errorData = '未找到该用户'
  } else if (userAuthInfo.status_user !== 1) {
    loginRes.errorData = '该用户已禁用'
  } else if (userAuthInfo.status_auth !== 1) {
    loginRes.errorData = '请更换登录账号类型重试'
  } else if (reqTokenMd5 !== userAuthInfo.token) {
    loginRes.errorData = '密码不正确'
  } else {
    loginRes.flag = true
  }

  if (loginRes.flag) {
    return {
      provider: user.provider,
      user_name: userAuthInfo.user_name,
      id_user: userAuthInfo.id_user
    }
  } else {
    ctx.session.passportFailMsg = loginRes
    return false
  }
}
