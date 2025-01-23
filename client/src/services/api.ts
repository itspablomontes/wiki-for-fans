import axios from "axios";

const baseURL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_BASE_URL_DEVELOPMENT
    : import.meta.env.VITE_API_BASE_URL_PRODUCTION;
const api = axios.create({
  baseURL,
});

export default api;
