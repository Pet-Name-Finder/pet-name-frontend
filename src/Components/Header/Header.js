import React from 'react';
import './Header.css';

const Header = () => {
  // First 3 buttons will be conditionally rendered for mobile view (hamburger)
  return (
    <nav className='header'>
      <button>View Your Packs</button>
      <button>Start New Pack</button>
      <button>Start as a Lone Wolf</button>
      <button>Logout</button>
      <h1 className='header-title'>Pet Name Finder</h1>
      <button>⭐️ View Liked Names ⭐️</button>
    </nav>
  )
}

export default Header;
