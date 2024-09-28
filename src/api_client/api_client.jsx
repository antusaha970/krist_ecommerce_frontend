import axios from "axios";
const client = axios.create({
  // baseURL: "https://krist-ecommerce-backend.onrender.com",
  baseURL: "http://localhost:8000",
});

client.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("access_token");
    if (token) {
      token = JSON.parse(token);
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const backendURL = "https://krist-ecommerce-backend.onrender.com/";

export default client;
