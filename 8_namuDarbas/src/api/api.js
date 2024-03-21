const url = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async () => {
  return fetch(url).then((response) => response.json());
};

export const fetchUser = async (id) => {
  return fetch(`${url}/${id}`).then((response) => response.json());
};
