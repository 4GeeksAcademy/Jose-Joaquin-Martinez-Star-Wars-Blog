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
    <div className="card-container card inline bg-dark border border-light">
      <img
        src={
          type === "planets" && element.uid === "1"
            ? "https://cdnb.artstation.com/p/marketplace/presentation_assets/000/692/587/large/file.jpg?1611445084"
            : `https://starwars-visualguide.com/assets/img/${type}/${element.uid}.jpg`
        }
        className="card-img-top"
        alt={`image of ${type} ${element.name}`}
      ></img>
      <div className="card-body">
        <h5 className="card-title">{element.name}</h5>
        <button
          className="btn bg-dark text-light border border-light"
          onClick={() => navigate(`/single/${type}/${element.uid}`)}
        >
          Learn more
        </button>
        <button
          className="btn bg-dark text-light border border-light"
          onClick={() => handleFavElement(element, type)}
        >
          <FaRegStar />
        </button>
      </div>
    </div>
  );
};
export default CarouselCard;
