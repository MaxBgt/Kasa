import React from "react";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="404">404</h1>
      <h2 className="oups">Oups! La page que vous demandé n'existe pas.</h2>
      <a href="" className="back-home">
        Retournez sur la page d'accueil
      </a>
    </div>
  );
};

export default NotFound;
