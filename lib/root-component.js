'use strict';

const React = require('react');
class Root extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Form validation</title>
          <link rel="stylesheet" href="/build/assets/main.css"/>
        </head>
        <body>
          <h1>Form validation</h1>
          <div id="main" dangerouslySetInnerHTML={
            {
              __html: this.props.html
            }
          }
          />
          <script src="/build/assets/client.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Root;
