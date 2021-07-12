import './LikedNames.css';
import React from 'react';

const LikedNames = ({ likedNames }) => {
  const mappedNames = likedNames.map((name) => {
    return (
      <li>{name}</li>
      //might need keys for each li element?
      //will implement a delete/remove name button here once we figure out how we're passing state
    )
  })

  return (
    <div className="liked-names">
      <h2>Your Liked Names:</h2>
      <ul>
        {mappedNames}
      </ul>
    </div>
  )
}

export default LikedNames;
