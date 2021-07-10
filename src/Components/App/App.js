import React, { Component } from 'react';
// import { client } from "./../ApolloClient/client";
// import { ApolloProvider } from '@apollo/client';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Home from '../Home/Home';
import ViewPacks from '../ViewPacks/ViewPacks';
import LikedNames from '../LikedNames/LikedNames';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import userData from '../../Data/User';
import './App.css';

class App extends Component {
  constructor() {
    super();
      this.state = {
        allUsers: userData.users,
        currentUser: null,
        likedNames: [],
        allPacks: [],
        loggedIn: false
      }
  }

  setUser = (user) => {
    this.setState({ currentUser: user });
    this.setState({ loggedIn: false })
  }

  setLikedNames = ({ currentUser }) => {
    let foundLiked = currentUser.likedNames;
    this.setState({ currentUser: foundLiked });
  }

  // componentDidMount() {
  //
  // }

  render() {
    console.log("CURRENT USER", this.state.currentUser)
    return (
      <>
        <div className="App">
          <Header />
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
                return <ViewPacks />
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
          </div>
        </div>
      </>
    );
  }
}

export default App;

// NEED TO SWAP PATHS FOR HOME && LOGIN
// LOGIN SHOULD BE => exact path="/"
// && HOME SHOULD BE => /home/:id
// AND CHANGE NAVLINK IN BOTH FILES


// <Route path="/pack/:id">
//   <Pack />
// </Route>
