import Header from "../components/Header";
import homeImg from "../assets/img/IMG.png";
import Card from "../components/Card";
import jsonData from "../db.json";
import { useState } from "react";
import Footer from "../components/Footer";
const Home = () => {
  const [data] = useState(jsonData);
  return (
    <div>
      <Header />
      <div className="home-page">
        <div className="home-img-container">
          <img src={homeImg} alt="page d'accueil" className="home-img" />
          <h1 className="slogan">Chez vous, partout et ailleurs</h1>
        </div>
      </div>
      <div className="card-contains">
        <div className="card">
          {data
            .map((logement) => <Card key={logement.id} logement={logement} />)
            .slice(0, 18)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
