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
    let foundUser = this.state.allUsers.find(user => {
      return user.email === this.state.emailInput
    });

    if(!foundUser) {
      alert("Sorry no account found!");
      this.clearInput();
    } else {
      this.props.setUser(foundUser);
    }
  }

  // componentDidMount() {
  //
  // }

  render() {
  return (
    <div className="login">
      <h1 className="login-header">Pet Name Finder</h1>
      <input
        className="login-input"
        placeholder="Email"
        value={this.state.searchInput}
        onChange={(event) => this.handleChange(event)}
      >
      </input>
      <NavLink to="/"><button
          onClick={(event) => this.searchInput(event)}>🐾 Login Now! 🐾
        </button></NavLink>
    </div>
  )
  }
}

export default Login;

//  currentUser: this.props.currentUser
