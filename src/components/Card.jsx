import React from "react";

const Card = ({ logement }) => {
  return (
    <div className="card-container">
      <img src={logement.cover} alt={logement.title} className="card-img" />
      <h3 className="card-title">{logement.title}</h3>
    </div>
  );
};

export default Card;
