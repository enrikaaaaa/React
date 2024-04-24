import API from "../consts";
import axios from "axios";

export const getUsers = () => {
  return axios.get(API);
};

export const postUser = (newUser) => {
  return axios.post(API, newUser);
};
