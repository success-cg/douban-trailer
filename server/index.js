const Koa = require('koa'); //koa2 框架
const app = new Koa();
const port = 2345;
const {normal} = require('./tpl/index');

app.use(async (ctx, next) => {
  ctx.type = 'text/html; charset=utf-8';
  ctx.body = normal;
  await next();
});
app.listen(port, () => {
  console.log(`浏览器访问 http://localhost:${port}`);
});