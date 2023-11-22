// Importación de libraries
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

export const listNotesService = (access) => {
  return axios
    .get(`${apiUrl}note/`, { headers: { Authorization: "Bearer " + access } })
    .then((response) => response.data)
    .catch((err) => {
      throw err.response;
    });
};
