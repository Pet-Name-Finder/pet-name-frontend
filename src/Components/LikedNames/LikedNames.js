import './LikedNames.css';
import React from 'react';

export default function LikedNames({ likedNames }) {

  const mappedNames = likedNames.map((name) => {
    return (
      <li>{name}</li>
      //might need keys for each li element?
      //will implement a delete/remove name button here once we figure out how we're passing state
    )
  })

  return (
    <>
      <h2>Your Liked Names:</h2>
      <ul>
        {mappedNames}
      </ul>
    </>
  )
}