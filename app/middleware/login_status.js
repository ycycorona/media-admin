module.exports = () => {
  return async function loginStatus(ctx, next) {
    // 是否不需要登录
    let isMatchNologinList = ctx.app.config.noLoginPath.findIndex((path) => {
      return !!ctx.originalUrl.match(new RegExp(path))
    }) >= 0
    let login
    if (!isMatchNologinList) {
      // 需要登录
      login = ctx.isAuthenticated()
    }
    if (isMatchNologinList || login) {
      await next();
    } else {
      ctx.body = ctx.failRes({status: '0', error: '1002', msg: 'no login info'})
    }

  };
};
