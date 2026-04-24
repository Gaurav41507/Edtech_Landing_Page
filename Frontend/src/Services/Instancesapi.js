import axios from "axios";

// const api = axios.create({
//   baseURL: "https://experiencepavilion.com/api/v1/classUser/data",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });


const api = axios.create({
  baseURL: "http://localhost:5000/api/forms",
  headers: {
    "Content-Type": "application/json",
  },
});


// Optional: interceptors for authentication
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // example if you store JWT
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;