import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <>
      <NavLink to='/'><button data-cy='home-button' className='home-button'>Take Me Back Home!</button></NavLink>
      <div>
        <img className='error-img' src="404_error_penguin.jpeg"  alt="page not found with penguin holding 404 sign" style={{textAlign:"center"}} />
      </div>
    </>
  )
}

export default NotFoundPage;
