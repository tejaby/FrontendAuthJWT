import axios from "axios";

const apiUrl = "http://localhost:8000/";

export const loginService = async (user) => {
  return axios
    .post(`${apiUrl}login/`, user)
    .then((response) => response.data)
    .catch((err) => {
      throw err.response
    });
};
