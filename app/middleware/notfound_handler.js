module.exports = () => {
  return async function notFoundHandler(ctx, next) {
    await next();
    if (ctx.status === 404) {
      if (ctx.acceptJSON) {
        ctx.body = { msg: 'Not Found', status: '0', error: '-404' };
      } else {
        // ctx.body = '<h1>Page Not Found</h1>';
      }
    }
  };
};
