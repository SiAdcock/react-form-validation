const koa = require('koa');
const React = require('react');
const ReactDOM = require('react-dom/server');
const Root = require('./root-component');
const app = koa();

app.use(function *() {
  const html = ReactDOM.renderToString(
    React.createElement(Root)
  );

  this.body = html;
});
app.listen(9000, () => {
  console.log('Koa listening on port 9000');
});

module.exports = app;
