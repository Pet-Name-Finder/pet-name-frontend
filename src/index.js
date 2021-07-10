import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
import './index.css';
<<<<<<< HEAD
import App from './Components/App/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
=======

const router = (<BrowserRouter> <App /> </BrowserRouter>);

ReactDOM.render(router, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
>>>>>>> ef2d0ada8d701359be1c9afb034312306b946e30
