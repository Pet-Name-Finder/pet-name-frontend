import React, { Component } from 'react';
// import { client } from "./../ApolloClient/client";
// import { ApolloProvider } from '@apollo/client';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Home from '../Home/Home';
import ViewPacks from '../ViewPacks/ViewPacks';
import Pack from '../Pack/Pack';
import LikedNames from '../LikedNames/LikedNames';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import userData from '../../Data/User';
import packData from '../../Data/Pack';
import './App.css';

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
    //temp solution while you can move around the app while not logged in
    if(this.state.currentUser) {
      const nameFound = this.state.currentUser.likedNames.find(userName => name === userName)
      if(!nameFound) {
        this.state.currentUser.likedNames.push(name);
      }
    }
  }

  render() {
    return (
      <>
        <div className="App">
          <Header
            loggedIn={this.state.loggedIn}
            logoutUser={this.logoutUser}
          />
          <div className='app-container'>
            <Switch>
              <Route exact path="/" render={() => {
                 return <Home />
                }}
              />
              <Route path="/login" render={() => {
                return <Login
                  setUser={this.setUser}
                />
               }}
              />
              <Route path="/all-packs" render={() => {
                return <ViewPacks
                  usersPacks={this.state.usersPacks}
                />
                }}
              />
              <Route path="/liked-names" render={() => {
                return <LikedNames
                  likedNames={this.state.likedNames}
                />
                }}
              />
              <Route path="/pack:id" render={() => {
                return <Pack
                  user={this.state.currentUser}
                  addVoteUser={this.addUpVotted}
                />
              }}
              />
              <Route path="*" render={() => {
                return <NotFoundPage />
                }}
              />
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

export default App;



// <Route path="/pack:id" render={() => {
//   return <Pack />
// }}
// />
