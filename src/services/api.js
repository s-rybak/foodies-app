import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

/**
 * Axios instance with default common settings.
 */
export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: { "content-type": "application/json" },
});

export const setToken = token => {
  api.defaults.headers.common.Authorization = "Bearer " + token;
};

export default api;
<<<<<<< HEAD

=======
>>>>>>> main
