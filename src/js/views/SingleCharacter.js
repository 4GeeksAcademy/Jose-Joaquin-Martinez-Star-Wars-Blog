import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//import style
import "../../styles/SingleCharacter.css";

export const SingleCharacter = () => {
  const params = useParams();
  const [characteristics, setCharacteristics] = useState({});
  const [character, setCharacter] = useState({});

  const getIndividualcharacteristics = async () => {
    try {
      const response = await fetch(
        `https://www.swapi.tech/api/people/${params.uid}`
      );
      const data = await response.json();
      if (response.ok) {
        setCharacter(data.result);
        setCharacteristics(data.result.properties);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getIndividualcharacteristics();
  }, [params.uid]);

  return (
    <div className="single-view-container">
      <section className="introduction-container">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
          alt={`image of ${characteristics.name}`}
          className="single-img"
        ></img>
        <div className="name-descp-container">
          <h1>{characteristics.name}</h1>
          <h2>{character.description}</h2>
        </div>
      </section>
      <section className="characteristics-container">
        <div>
          <h5>Birth year</h5>
          <p>{characteristics.birth_year}</p>
        </div>
        <div>
          <h5>Gender</h5>
          <p>{characteristics.gender}</p>
        </div>
        <div>
          <h5>Height</h5>
          <p>{characteristics.height}</p>
        </div>
        <div>
          <h5>Skin Color</h5>
          <p>{characteristics.skin_color}</p>
        </div>
        <div>
          <h5>Eye Color</h5>
          <p>{characteristics.eye_color}</p>
        </div>
      </section>
    </div>
  );
};
