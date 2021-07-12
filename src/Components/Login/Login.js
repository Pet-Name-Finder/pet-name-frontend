import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import userData from '../../Data/User';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
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
    let foundUser = this.state.allUsers.find(user => user.email === this.state.emailInput);

    if(!foundUser) {
      alert("Sorry no account found!");
      this.clearInput();
    } else {
      this.props.setUser(foundUser);
    }
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
        <NavLink to="/"><button
            className="login-now-btn"
            onClick={(event) => this.searchInput(event)}>🐾 Login Now! 🐾
          </button></NavLink>
      </div>
    )
  }
}

export default Login;
