const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favItem: [],
      characters: [],
      planets: [],
      vehicles: [],
    },
    actions: {
      getCharacters: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/people/");
          if (!response.ok) {
            throw new Error("Error al obtener los personajes de la API");
          }
          const data = await response.json();
          await setStore({ characters: data.results });
        } catch (error) {
          console.error("Error al obtener los personajes:", error);
        }
      },
      getPlanets: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/planets/");
          if (!response.ok) {
            throw new Error("Error al obtener los planetas de la API");
          }
          const data = await response.json();
          await setStore({ planets: data.results });
        } catch (error) {
          console.error("Error al obtener los planetas:", error);
        }
      },
      getVehicles: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/vehicles/");
          if (!response.ok) {
            throw new Error("Error al obtener los vehiculos de la API");
          }
          const data = await response.json();
          await setStore({ vehicles: data.results });
        } catch (error) {
          console.error("Error al obtener los vehiculos:", error);
        }
      },
      addToFavorites: (element, type) => {
        const store = getStore();
        const newItem = { ...element, category: type };
        const updatedFavItems = [...store.favItem, newItem];
        setStore({ favItem: updatedFavItems });
      },
      deleteFromFavorites: (element) => {
        const store = getStore();
        const updateFavItems = store.favItem.filter((item) => item !== element);
        setStore({ favItem: updateFavItems });
      },
    },
  };
};

export default getState;
