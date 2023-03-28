import React from "react";
import Header from "../components/Header";
import homeImg from "../assets/img/IMG.png";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-page">
        <div className="home-img-container">
          <img src={homeImg} alt="image page d'accueil" className="home-img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
<h1>Home</h1>;
