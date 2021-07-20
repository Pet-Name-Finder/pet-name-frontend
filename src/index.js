import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';
//import ApolloClient from 'apollo-boost';
import {ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import Cache, { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider, graphql } from 'react-apollo';
// import reportWebVitals from './reportWebVitals';
import './index.css';

const requestLink = createHttpLink({
    uri: "https://pet-name-finder-be.herokuapp.com/graphql",
});

const errorLink = onError(({graphqlErrors, networkError })=> {
    if(graphqlErrors) console.log(graphqlErrors);
    if(networkError) console.log("Network error");
})

const link = errorLink.concat(requestLink);


const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
})

const router = (<BrowserRouter> <ApolloProvider client={client}><App /> </ApolloProvider></BrowserRouter>);

ReactDOM.render(router, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
