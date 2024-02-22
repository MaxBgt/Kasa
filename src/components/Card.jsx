import React from "react";
import { Link } from "react-router-dom";

const Card = ({ logement }) => {
  return (
      <Link to={`/description/${logement.id}`}>
        <div className="card-container">
          <div className="opacity_img"></div>
          <img src={logement.cover} alt={logement.title} className="card-img" />
          <h2 className="card-title">{logement.title}</h2>
        </div>
      </Link>
  );
};

export default Card;
