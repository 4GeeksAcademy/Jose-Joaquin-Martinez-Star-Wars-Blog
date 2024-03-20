import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicle = () => {
  const params = useParams();
  const [characteristics, setCharacteristics] = useState({});
  const [vehicle, setVehicle] = useState({});

  const getIndividualvehicle = async () => {
    try {
      const response = await fetch(
        `https://www.swapi.tech/api/vehicles/${params.uid}`
      );
      const data = await response.json();
      if (response.ok) {
        setVehicle(data.result);
        setCharacteristics(data.result.properties);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getIndividualvehicle();
  }, [params.uid]);
  return (
    <>
      <section>
        <img
          src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
        ></img>
        <p>{characteristics.name}</p> <p>{vehicle.description}</p>
      </section>
      <section>
        <p>{characteristics.mode}</p>
        <p>{characteristics.vehicle_class}</p>
        <p>{characteristics.manufacturer}</p>
        <p>{characteristics.cost_in_credits}</p>
        <p>{characteristics.crew}</p>
        <p>{characteristics.passengers}</p>
        <p>{characteristics.cargo_capacity}</p>
        <p>{characteristics.consumables}</p>
        <p>{characteristics.length}</p>
      </section>
    </>
  );
};
