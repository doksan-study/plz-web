import axios from "axios";

export const getAPIHost = () => {
  return "http://44.202.91.180:3000";
};

export const api = axios.create({
  baseURL: getAPIHost(),
});

export const setToken = (token: any) => {
  sessionStorage.setItem("token", token);
};

export default api;
