import './App.css';
// import { client } from "./../ApolloClient/client";
// import { ApolloProvider } from '@apollo/client';
import { Route, Switch, Link } from 'react-router-dom';
import Header from '../Header/Header';

function App() {
  return (
    // {<ApolloProvider client={client}>}
      <div className="App">
        <Header />
        {/* <div className='app-container'>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home/:id">
            <Home />
          </Route>
          <Route path="/pack/:id">
            <Pack />
          </Route>
        </Switch>
        </div>*/}
      </div>
    // {</ApolloProvider>}
  );
}

export default App;
