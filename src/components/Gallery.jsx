import { useParams } from "react-router-dom";
import jsonData from "../db.json";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Gallery = () => {
  const { id } = useParams();
  const foundLogement = jsonData.find((logement) => logement.id === id);
  const [indexImg, setIndexImg] = useState(0);

  if (!foundLogement) {
    return;
  }

  const nextSlide = () => {
    setIndexImg((indexImg + 1) % foundLogement.pictures.length);
  };
  const prevSlide = () => {
    setIndexImg(
      (indexImg - 1 + foundLogement.pictures.length) %
        foundLogement.pictures.length
    );
  };
  return (
    <div className="carousel">
    {foundLogement?.pictures.map((pic, index) => (
      <div
        key={index}
        className={index === indexImg ? "slide active" : "slide"}
      >
        <img src={pic} className="desc-img" alt={pic.id} />
      </div>
    ))}
    <div className="navigation">
      <button className="carousel-control-prev " onClick={prevSlide}>
        {foundLogement.pictures.length > 1 ? (
          <FontAwesomeIcon icon={faChevronLeft} />
        ) : (
          ""
        )}
      </button>
      <button className="carousel-control-next" onClick={nextSlide}>
        {foundLogement.pictures.length > 1 ? (
          <FontAwesomeIcon icon={faChevronRight} />
        ) : (
          ""
        )}
      </button>
    </div>
    <div className="img-counter">
      {foundLogement.pictures.length > 1
        ? `${indexImg + 1} / ${foundLogement?.pictures.length}`
        : ``}
    </div>
  </div>
  );
};

export default Gallery;
