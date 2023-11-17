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

export const logoutService = (refresh) => {
  return axios
    .post(`${apiUrl}logout/`, refresh)
    .then((response) => response.data)
    .catch((err) => {
      throw err.response;
    });
};

export const refreshService = (refresh) => {
  return axios
    .post(`${apiUrl}refresh/`, refresh)
    .then((response) => response.data)
    .catch((err) => {
      throw err.response;
    });
};
