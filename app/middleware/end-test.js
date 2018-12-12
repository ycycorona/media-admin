module.exports = (options, app) => {
  return async function endTest(ctx, next) {
    await next();

    // 后续中间件执行完成后将响应体转换成 gzip
    let body = ctx.body;
    if (!body) {
      ctx.body = options.content
    } else {
      ctx.body += options.content
    }
  };
};
