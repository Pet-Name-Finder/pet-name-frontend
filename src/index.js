import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';
import {ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
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