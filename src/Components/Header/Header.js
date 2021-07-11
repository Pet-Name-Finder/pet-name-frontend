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
      <button>⭐️ View Liked Names ⭐️</button>
      <button>Logout</button>
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
