import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

// REGISTER
export const registerUser = (data) => {
  return API.post("register/", data);
};

// LOGIN
export const loginUser = (data) => {
  return API.post("login/", data);
};