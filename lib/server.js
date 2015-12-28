const koa = require('koa');
const mount = require('koa-mount');
const serve = require('koa-static');
const React = require('react');
const ReactDOM = require('react-dom/server');
const Root = require('./root-component');
const Main = require('../app/components/main');
const app = koa();

app.use(mount('/build/assets', serve('build/assets')));
app.use(function *() {
  this.body = ReactDOM.renderToStaticMarkup(
    <Root html={ReactDOM.renderToString(<Main/>)}/>
  );
});
app.listen(9000, () => {
  console.log('Koa listening on port 9000');
});

module.exports = app;
