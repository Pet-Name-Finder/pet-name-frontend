import './App.css';
import React, { Component } from 'react';
// import { client } from "./../ApolloClient/client";
// import { ApolloProvider } from '@apollo/client';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Home from '../Home/Home';
import ViewPacks from '../ViewPacks/ViewPacks';
import Pack from '../Pack/Pack';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

class App extends Component {
  constructor() {
    super();
      this.state = {

      }
  }

  render() {
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
                return <Login />
                }}
              />
              <Route path="/viewPacks" render={() => {
                return <ViewPacks />
              }}
              />
              <Route path="/pack:id" render={() => {
                return <Pack />
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
