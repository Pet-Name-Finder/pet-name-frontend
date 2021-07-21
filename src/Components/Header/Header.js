import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = ({ loggedIn, logoutUser }) => {
  return (
    <header>
      {loggedIn && (
        <NavLink to="/" className="logo-link">
          <img
            src="./pet.png"
            alt="Pet Name Finder logo"
            className="logo"
          ></img>
          <h1 className="header-title">Pet Name Finder</h1>
        </NavLink>
      )}
      {!loggedIn && (
        <div className="logo-link">
          <img
            src="./pet.png"
            alt="Pet Name Finder logo"
            className="logo"
          ></img>
          <h1 className="header-title">Pet Name Finder</h1>
        </div>
      )}
      <div className="button-container">
        {loggedIn && (
          <NavLink to="/liked-names">
            <button data-cy="view-liked-button" className="view-liked-button">
              View ⭐️Liked⭐️ Names
            </button>
          </NavLink>
        )}
        {loggedIn && (
          <button
            data-cy="logout-button"
            className="login-button"
            onClick={(event) => logoutUser(event)}
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
