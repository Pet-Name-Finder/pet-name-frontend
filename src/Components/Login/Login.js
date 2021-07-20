import React, { Component } from 'react';
import { Route, useHistory } from 'react-router-dom';
import userData from '../../Data/User';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
      this.state = {
        allUsers: userData.users,
        emailInput: ""
      }
  }

  handleChange = (event) => {
    this.setState({ emailInput: event.target.value })
  }

  clearInput = () => {
    this.setState({ emailInput: "" })
  }

  searchInput = (event) => {
    event.preventDefault();
    this.props.checkUser(this.state.emailInput);
  }

  render() {
    return (
      <div className="login">
        <h1 className="login-header">Pet Name Finder Login</h1>
        <label htmlFor="email">Email</label>
        <input
          className="login-input"
          id="email"
          type="email"
          placeholder="Email"
          value={this.state.searchInput}
          onChange={(event) => this.handleChange(event)}
        >
        </input>
        <button
            className="login-now-btn"
            onClick={(event) => this.searchInput(event)}>🐾 Login Now! 🐾
          </button>
      </div>
    )
  }
}

export default Login;
