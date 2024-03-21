import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

//import style
import "./../../styles/CarouselCard.css";

//import icon
import { FaRegStar } from "react-icons/fa";

const CarouselCard = ({ element, type, handleFavElement }) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="card-container">
      <img
        src={
          type === "planets" && element.uid === "1"
            ? "https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/4/4b/Tatooine-3.jpg"
            : `https://starwars-visualguide.com/assets/img/${type}/${element.uid}.jpg`
        }
        className="card-img"
        alt={`image of ${type} ${element.name}`}
      ></img>
      <div className="body-card">
        <h5 className="title-card">{element.name}</h5>
        <div className="button-container">
          <button
            className="learn-btn"
            onClick={() => navigate(`/single/${type}/${element.uid}`)}
          >
            Learn more
          </button>
          <button
            className="fav-btn"
            onClick={() => handleFavElement(element, type)}
          >
            <FaRegStar />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CarouselCard;
