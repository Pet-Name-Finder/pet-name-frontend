import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
      this.state = {

      }
  }

  render() {
    return (
      <div className="home">
        <NavLink to="/all-packs"><button className="main-btn view-packs-btn">View Your Packs</button></NavLink>
        <button className="main-btn start-pack-btn">Start New Pack</button>
        <button className="main-btn start-lone-btn">Start as a Lone Wolf</button>
      </div>
    );
  }
}

export default Home;
