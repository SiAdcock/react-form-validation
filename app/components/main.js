'use strict';

const React = require('react');
class Main extends React.Component {
  render() {
    return (
      <form>
        <div className="form-row">
          <label>First Name:</label>
          <input type="text"/>
        </div>
        <div className="form-row">
          <label>Last Name:</label>
          <input type="text"/>
        </div>
        <div className="form-row">
          <label>Email:</label>
          <input type="email"/>
        </div>
        <div className="form-row">
          <label>Password:</label>
          <input type="password"/>
        </div>
        <div className="form-row">
          <button type="button">Submit</button>
        </div>
      </form>
    );
  }
}

module.exports = Main;
