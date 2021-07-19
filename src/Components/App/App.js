import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Voting from '../Voting/Voting';
import LikedNames from '../LikedNames/LikedNames';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import userData from '../../Data/User';
import packData from '../../Data/Pack';
import './App.css';

import { graphql } from 'react-apollo';
import { getUserQuery } from '../../Queries/queries';

const client = new ApolloClient({
  uri: "https://pet-name-finder-be.herokuapp.com/graphql"
})

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
    this.setState({ usersPacks: user.packs });
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

  renderSwitch = () => {
    return <Switch>
      <Route exact path="/" render={() => {
        if(this.state.currentUser){
          return <Home />
        } else {
          return <Login 
            setUser={this.setUser}
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
      <ApolloProvider client={client}>
        <div className="App">
          <Header
            loggedIn={this.state.loggedIn}
            logoutUser={this.logoutUser}
          />
          <div className='app-container'>
            {this.renderSwitch()}
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;



// <Route path="/pack:id" render={() => {
//   return <Pack />
// }}
// />
