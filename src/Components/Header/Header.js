import React from 'react';
import './Header.css';

const Header = () => {
<<<<<<< HEAD
  // First 3 buttons will be conditionally rendered for mobile view (hamburger)
  return (
    <nav className='header'>
      <button>View Your Packs</button>
      <button>Start New Pack</button>
      <button>Start as a Lone Wolf</button>
      <button>Logout</button>
      <h1 className='header-title'>Pet Name Finder</h1>
      <button>⭐️ View Liked Names ⭐️</button>
=======
  // Hamburger will be conditionally rendered for mobile view
  return (
    <nav className='header'>
      <div className='hamburger-menu'>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className='header-title'>Pet Name Finder</h1>
      <button>⭐️ View Liked Names ⭐️</button>
      <button>Logout</button>
>>>>>>> ef2d0ada8d701359be1c9afb034312306b946e30
    </nav>
  )
}

export default Header;
<<<<<<< HEAD
=======

// Add to hamburger dropdown
// <ul>
//   <li><a href="#">View Your Packs</a></li>
//   <li><a href="#">Start New Pack</a></li>
//   <li><a href="#">Start as a Lone Wolf</a></li>
// </ul>
>>>>>>> ef2d0ada8d701359be1c9afb034312306b946e30
