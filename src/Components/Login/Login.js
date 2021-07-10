import React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <NavLink to='/login'>
      <div className='login'>
        <h1 className='login-header'>Pet Name Finder</h1>
        <input className='login-input' placeholder='Email'></input>
        <button>🐾 Login Now! 🐾</button>
      </div>
    </NavLink>
  )
}

export default Login;
