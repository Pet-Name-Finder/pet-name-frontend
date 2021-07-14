import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

import { graphql } from 'react-apollo';
import { getTempInfo } from '../../Queries/queries';

class Home extends Component {
  constructor() {
    super();
      this.state = {

      }
  }

  render() {
    console.log(this.props);
    return (
      <div className="home">
        <NavLink to="/all-packs"><button data-cy="view-packs-btn" className="main-btn view-packs-btn">View Your Packs</button></NavLink>
        <button data-cy="start-pack-btn" className="main-btn start-pack-btn">Start New Pack</button>
        <button data-cy="start-lone-btn" className="main-btn start-lone-btn">Start as a Lone Wolf</button>
      </div>
    );
  }
}

export default graphql(getTempInfo)(Home);
