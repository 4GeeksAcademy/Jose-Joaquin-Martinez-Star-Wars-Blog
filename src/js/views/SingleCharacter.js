import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <>
      <section>
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
          alt={`image of ${characteristics.name}`}
        ></img>
        <p>{characteristics.name}</p> <p>{character.description}</p>
      </section>
      <section>
        <p>{characteristics.name}</p>
        <p>{characteristics.birth_year}</p>
        <p>{characteristics.gender}</p>
        <p>{characteristics.height}</p>
        <p>{characteristics.skin_color}</p>
        <p>{characteristics.eye_color}</p>
      </section>
    </>
  );
};
