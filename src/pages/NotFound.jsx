import React from "react";

const NotFound = () => {
  return (
    <div>
      <div className="not-found">
        <h1 className="title_notFound">404</h1>
        <h2 className="oups">Oups! La page que vous demandez n'existe pas.</h2>
        <a href="/" className="back-home">
          Retournez sur la page d'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
