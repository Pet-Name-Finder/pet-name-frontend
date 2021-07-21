import "./LikedNames.css";
import React from "react";

const LikedNames = ({ likedNames }) => {
  const mappedNames = likedNames.map((name) => {
    return <li key={name.id} data-cy="name">{name.name}</li>;
  });

  return (
    <div className="liked-names">
      <h2>Your Liked Names:</h2>
      <ul className="bullet-container">{mappedNames}</ul>
    </div>
  );
};

export default LikedNames;
