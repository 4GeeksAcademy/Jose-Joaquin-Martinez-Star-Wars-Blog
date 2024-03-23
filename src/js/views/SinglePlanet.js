import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//import style

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
      <section className="img-single-view">
        <img
          src={
            planet.uid === "1"
              ? "https://i.pinimg.com/474x/9f/d0/02/9fd00203ccb2d3b53270623f7c5e8482.jpg"
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
