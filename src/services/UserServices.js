import axios from "axios";

const apiUrl = "http://localhost:8000/";

export const loginService = (user) => {
  return axios
    .post(`${apiUrl}login/`, user)
    .then((response) => response.data)
    .catch((err) => {
      throw err.response;
    });
};

export const logoutService = (refresh, access) => {
  return axios
    .post(`${apiUrl}logout/`, refresh, {
      headers: { Authorization: `Bearer ${access}` },
    })
    .then((response) => response.data)
    .catch((err) => {
      throw err.response;
    });
};
