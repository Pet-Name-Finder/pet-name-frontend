import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
// import reportWebVitals from './reportWebVitals';
import './index.css';
const client = new ApolloClient({
    uri: "https://pet-name-finder-be.herokuapp.com/graphql"
})

const router = (<BrowserRouter> <ApolloProvider client={client}><App /> </ApolloProvider></BrowserRouter>);

ReactDOM.render(router, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
