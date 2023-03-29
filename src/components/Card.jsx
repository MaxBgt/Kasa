import React from "react";
import { Link } from "react-router-dom";

const Card = ({ logement }) => {
  return (
    <Link to={`/description/${logement.id}`} className="card-container">
      <div>
        <img src={logement.cover} alt={logement.title} className="card-img" />
        <h3 className="card-title">{logement.title}</h3>
      </div>
    </Link>
  );
};

export default Card;
