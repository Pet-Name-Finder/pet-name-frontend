import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
      this.state = {

      }
  }

  render() {
    return (
      <div className="Home">
        <Header />
      </div>
    );
  }
}

export default Home;
