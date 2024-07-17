import axios from "axios";
const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

// Will edit later when we need to send JWT token to backend.
// client.interceptors.request.use(
//   (config) => {
//     let token = localStorage.getItem("user_token");
//     if (token) {
//       token = JSON.parse(token);
//       config.headers.Authorization = `Token ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default client;
