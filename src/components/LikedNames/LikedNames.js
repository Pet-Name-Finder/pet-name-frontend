import './LikedNames.css';
import React from 'react';

export default function LikedNames({ likedNames }) {

  const mappedNames = likedNames.map((name) => {
    return (
      <li>{name}</li>
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
