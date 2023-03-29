import Header from "../components/Header";
import homeImg from "../assets/img/IMG.png";
import Card from "../components/Card";
import jsonData from "../db.json";
import { useState } from "react";
const Home = () => {
  const [data, setData] = useState(jsonData);
  return (
    <div>
      <Header />
      <div className="home-page">
        <div className="home-img-container">
          <img src={homeImg} alt="image page d'accueil" className="home-img" />
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
    </div>
  );
};

export default Home;
<h1>Home</h1>;
