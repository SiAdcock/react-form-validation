'use strict';

const React = require('react');
class Root extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Form validation</title>
        </head>
        <body>
          <h1>Form validation</h1>
          <div id="main"/>
          <script src="/build/assets/client.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Root;
