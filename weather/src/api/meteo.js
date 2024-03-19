import axios from "axios";

export const getMeteo = () => {
  return axios.get("http://localhost:3000/places");
};

export const getPlaces = (placeCode) => {
  return axios.get(
    `http://localhost:3000/places/${placeCode}/forecasts/long-term`
  );
};
