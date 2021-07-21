import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <NavLink to="/voting">
          <button data-cy="start-voting-btn" className="main-btn view-packs-btn">
            Start Voting!
          </button>
        </NavLink>
      </div>
    );
  }
}

export default Home;
