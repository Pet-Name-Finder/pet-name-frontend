import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

import { graphql } from 'react-apollo';
import { getPetNamesQuery} from '../../Queries/queries';

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
        <NavLink to="/voting"><button data-cy="view-packs-btn" className="main-btn view-packs-btn">Start Voting!</button></NavLink>
      </div>
    );
  }
}

export default graphql(getPetNamesQuery)(Home);
