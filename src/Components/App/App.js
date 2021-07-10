import './App.css';
import React, { Component } from 'react';
// import { client } from "./../ApolloClient/client";
// import { ApolloProvider } from '@apollo/client';
import { Route, Switch, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Login from '../Login/Login';
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
                <Login />
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

//  <Route path="/home/:id">
//   <Home />
// </Route>
// <Route path="/pack/:id">
//   <Pack />
// </Route>
