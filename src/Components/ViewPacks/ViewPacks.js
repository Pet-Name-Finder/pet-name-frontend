import React from "react";
import "./ViewPacks.css";
import data from "../../Data/Pack";
import PackCard from "../PackCard/PackCard";

const ViewPacks = ({ usersPacks }) => {
  const displayCards = data.packs.map((pack) => {
    return <PackCard pack={pack} name={pack.name} key={pack.id} />;
  });

  return (
    <main className="packs-container">
      <h2>Your Packs</h2>
      {displayCards}
    </main>
  );
};

export default ViewPacks;
