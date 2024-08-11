import axios from "axios";
const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
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

export default client;
