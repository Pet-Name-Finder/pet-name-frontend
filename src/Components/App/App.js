import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Voting from '../Voting/Voting';
import LikedNames from '../LikedNames/LikedNames';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import userData from '../../Data/User';
import packData from '../../Data/Pack';
import './App.css';

import { graphql, withApollo } from 'react-apollo';
import { useLazyQuery } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { getPetNamesQuery, getUserQuery } from '../../Queries/queries';



class App extends Component {
  constructor() {
    super();
      this.state = {
        allUsers: userData.users,
        currentUser: null,
        likedNames: [],
        usersPacks: [],
        loggedIn: false,
        allPacks: packData.packs
      }
  }

  setUser = (user) => {
    this.setState({ currentUser: user });
    this.setState({ likedNames: user.likedNames });
    this.setState({ loggedIn: true })
  }

  logoutUser = () => {
    this.setState({ currentUser: null });
    this.setState({ likedNames: [] });
    this.setState({ usersPacks: [] });
    this.setState({ loggedIn: false });
  }

  addUpVotted = (name) => {
      const nameFound = this.state.currentUser.likedNames.find(userName => name === userName)
      if(!nameFound) {
        this.state.currentUser.likedNames.push(name);
      }
  }

  updateCurrentName = (packId) => {
    const updatedPacks = this.state.allPacks.map(pack => {
      if(pack.id === packId) {
        pack.members.map(member => {
          if(member.userId === this.state.currentUser.id) {
            member.currentName = member.currentName + 1; 
          }
          return member
        })
      }
      return pack;
    })
    this.setState({ allPacks: updatedPacks});
  }

  checkUser = async(typedEmail) => {
    const test = await this.props.client.query({
      query: getUserQuery,
      variables: {email: typedEmail}
    })
    console.log(test)
    if(test.data.user) {
      this.setUser(test.data.user)
    }
  }

  renderSwitch = () => {
    return <Switch>
      <Route exact path="/" render={() => {
        if(this.state.currentUser){
          return <Home />
        } else {
          return <Login 
            setUser={this.setUser}
            checkUser={this.checkUser}
            />
        }

      }}
      />
      <Route path="/voting" render={() => {
        return <Voting
          addVoteUser={this.addUpVotted}
        />
      }}
      />
      <Route path="/liked-names" render={() => {
        return <LikedNames
          likedNames={this.state.likedNames}
        />
      }}
      />
      <Route path="*" render={() => {
        return <NotFoundPage />
      }}
      />
    </Switch>
  }

  render() {
    return (
      
        <div className="App">
          <Header
            loggedIn={this.state.loggedIn}
            logoutUser={this.logoutUser}
          />
          <div className='app-container'>
            {this.renderSwitch()}
          </div>
        </div>

    );
  }
}

// export default compose(
//   graphql(getPetNamesQuery, {name: "getPetNamesQuery"}),
//   graphql(getUserQuery, { name: "getUserQuery"})

// )(App);

export default withApollo(App)



// <Route path="/pack:id" render={() => {
//   return <Pack />
// }}
// />
