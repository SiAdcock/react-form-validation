'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const mountNode = document.getElementById('main');

class Main extends React.Component {
  render() {
    return (
      <div>Such client</div>
    );
  }
}

ReactDOM.render(React.createElement(Main), mountNode);
