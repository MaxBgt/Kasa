import React from "react";

const Card = ({ logement }) => {
  return (
    <div className="card-container">
      <img src={logement.cover} alt="" />
      <h3>{logement.title}</h3>
    </div>
  );
};

export default Card;
