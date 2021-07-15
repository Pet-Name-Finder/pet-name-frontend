import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = ({ loggedIn, logoutUser }) => {
  // Hamburger will be conditionally rendered for mobile view
  return (
    <header>
      <div className="hamburger-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Link to='/' className="logo-link">
        <img src="./pet.png" alt="Pet Name Finder logo" className="logo"></img>
        <h1 className='header-title'>Pet Name Finder</h1>
      </Link>
      <div className="button-container">
        <NavLink to='/liked-names'><button data-cy='view-liked-button' className='view-liked-button'>View ⭐️Liked⭐️ Names</button></NavLink>
        {!loggedIn &&
        <NavLink to='/login'><button data-cy='login-button' className='login-button'>Login</button></NavLink>
        }
        {loggedIn &&
        <button
          data-cy='logout-button'
          className='login-button'
          onClick={(event) => logoutUser(event)}
        >Logout</button>
        }
      </div>
    </header>
  );
};

export default Header;

// Add to hamburger dropdown
// <ul>
//   <li><a href="#">View Your Packs</a></li>
//   <li><a href="#">Start New Pack</a></li>
//   <li><a href="#">Start as a Lone Wolf</a></li>
// </ul>
