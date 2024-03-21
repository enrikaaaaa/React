const url = "https://jsonplaceholder.typicode.com/users";

// export const fetchUsers = async () => {
//   return fetch(url).then((response) => response.json());
// };

// export const fetchUser = async (id) => {
//   return fetch(`${url}/${id}`).then((response) => response.json());
// };

import axios from "axios";

export const fetchUsers = async () => {
  return axios.get(url);
};

export const fetchUser = async (id) => {
  return axios.get(`${url}/${id}`);
};
