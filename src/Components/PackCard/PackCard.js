import React from "react";
import "./PackCard.css";
import { Link } from "react-router-dom";

const PackCard = ({ name, pack }) => {
  return (
    <Link to={`/pack${pack.id}`}>
      <div className="card">
        <p>{name}</p>
        <p>started!</p>
      </div>
    </Link>
  );
};

export default PackCard;
