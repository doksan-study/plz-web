import axios from "axios";

export const getAPIHost = () => {
  return process.env.REACT_APP_BASE_API_URL;
};

export const api = axios.create({
  baseURL: getAPIHost(),
});

export default api;
