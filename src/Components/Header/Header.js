import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {

  // Hamburger will be conditionally rendered for mobile view
  return (
    <nav className='header'>
      <div className='hamburger-menu'>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <NavLink to='/'><button data-cy='home-button' className='home-button'>Take Me Back Home!</button></NavLink>
      <h1 className='header-title'>Pet Name Finder</h1>
      <NavLink to='/liked-names'><button data-cy='view-liked-button' className='view-liked-button'>⭐️ View Liked Names ⭐️</button></NavLink>
      <NavLink to='/login'><button data-cy='login-button' className='login-button'>Login/Logout</button></NavLink>
    </nav>
  )
}

export default Header;

// Add to hamburger dropdown
// <ul>
//   <li><a href="#">View Your Packs</a></li>
//   <li><a href="#">Start New Pack</a></li>
//   <li><a href="#">Start as a Lone Wolf</a></li>
// </ul>
