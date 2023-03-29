import { useParams } from "react-router-dom";
import jsonData from "../db.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../components/DropDown";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const DisplayDescription = () => {
  const { id } = useParams();
  const foundLogement = jsonData.find((logement) => logement.id === id);

  function CustomNextArrow({ onClickHandler }) {
    return (
      <button className="carousel-control-next" onClick={onClickHandler}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    );
  }
  function CustomPrevArrow({ onClickHandler }) {
    return (
      <button className="carousel-control-prev" onClick={onClickHandler}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    );
  }

  function convertRatingToStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStars = Math.round(rating - fullStars);
    const emptyStars = 5 - fullStars - halfStars;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
    }
    for (let i = 0; i < halfStars; i++) {
      stars.push(<FontAwesomeIcon key={fullStars + i} icon={faStarHalfAlt} />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={fullStars + halfStars + i}
          icon={faStar}
          opacity={0.3}
        />
      );
    }
    if (stars.length < 5) {
      const emptyStarsToAdd = 5 - stars.length;
      for (let i = 0; i < emptyStarsToAdd; i++) {
        stars.push(
          <FontAwesomeIcon
            key={fullStars + halfStars + emptyStars + i}
            icon={faStar}
            opacity={0.3}
          />
        );
      }
    }

    return stars;
  }

  return (
    <div className="description-container">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && <CustomPrevArrow onClickHandler={onClickHandler} />
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && <CustomNextArrow onClickHandler={onClickHandler} />
        }
      >
        {foundLogement.pictures.map((pic, index) => (
          <div key={index}>
            <img src={pic} className="desc-img" />
          </div>
        ))}
      </Carousel>
      <div className="desc-content">
        <div className="title">
          <h2>{foundLogement.title}</h2>
          <h3>{foundLogement.location}</h3>
          <div className="tags">
            <ul className="tags">
              {foundLogement.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="host">
          <div className="host-content">
            <p className="host-name">{foundLogement.host.name}</p>
            <img
              src={foundLogement.host.picture}
              alt={foundLogement.host.name}
              className="host-picture "
            />
          </div>
          <div className="rating">
            {convertRatingToStars(foundLogement.rating)}
          </div>
        </div>
      </div>
      <div className="drop-down-description">
        <Dropdown
          className="drop-down"
          title="Description"
          content={<p className="desc-content">{foundLogement.description}</p>}
        />
        <Dropdown
          className="drop-down-btn equip_btn"
          title="Équipements"
          content={foundLogement.equipments.map((equip, index) => (
            <ul key={index} className="equip-content">
              <li>{equip}</li>
            </ul>
          ))}
        />
      </div>
    </div>
  );
};

export default DisplayDescription;
