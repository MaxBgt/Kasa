import Header from "../components/Header";
import aboutImg from "../assets/img/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import Footer from "../components/Footer";
import DropDown from "../components/DropDown";

const About = () => {
  return (
    <div>
      <Header />
      <div className="about-page">
        <div className="about-page-img">
          <img src={aboutImg} alt="header A propos" className="about-img" />
        </div>
      </div>
      <div className="drop-down">
        <DropDown
          title="Fiabilité"
          content={
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          }
        />{" "}
        <DropDown
          title="Respect"
          content={
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          }
        />
        <DropDown
          title="Service"
          content={
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
          }
        />
        <DropDown
          title="Sécurité"
          content={
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          }
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;
