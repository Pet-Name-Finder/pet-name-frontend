import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Redirect, Route, Switch } from 'react-router-dom';
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
          packs={this.state.allPacks}
          updateCurrentName={this.updateCurrentName}
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
            {!this.state.loggedIn && <Route path="/">
              {!this.state.loggedIn ? <Redirect to="/login" /> : <Login
                setUser={this.setUser}
              /> }
              </Route>}
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
