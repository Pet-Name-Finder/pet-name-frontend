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
      <NavLink to='/'>
        <div className="home">
          <button className="view-packs-btn">View Your Packs</button>
          <button className="start-pack-btn">Start New Pack</button>
          <button className="start-lone-btn">Start as a Lone Wolf</button>
        </div>
      </NavLink>
    );
  }
}

export default Home;
