import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const SinglePlanet = () => {
  const params = useParams();
  const [characteristics, setCharacteristics] = useState({});
  const [planet, setPlanet] = useState({});

  const getIndividualPlanet = async () => {
    try {
      const response = await fetch(
        `https://www.swapi.tech/api/planets/${params.uid}`
      );
      const data = await response.json();
      if (response.ok) {
        setPlanet(data.result);
        setCharacteristics(data.result.properties);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getIndividualPlanet();
  }, [params.uid]);

  return (
    <>
      <section>
        <img
          src={
            planet.uid === "1"
              ? "https://cdnb.artstation.com/p/marketplace/presentation_assets/000/692/587/large/file.jpg?1611445084"
              : `https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`
          }
        ></img>
        <p>{characteristics.name}</p> <p>{planet.description}</p>
      </section>
      <section>
        <p>{characteristics.diameter}</p>
        <p>{characteristics.orbital_period}</p>
        <p>{characteristics.gravity}</p>
        <p>{characteristics.population}</p>
        <p>{characteristics.climate}</p>
        <p>{characteristics.terrain}</p>
      </section>
    </>
  );
};
