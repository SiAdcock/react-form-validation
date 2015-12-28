'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const mountNode = document.getElementById('main');
const Main = require('./app/components/main');

ReactDOM.render(React.createElement(Main), mountNode);
