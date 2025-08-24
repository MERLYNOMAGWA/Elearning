import axios from "axios";

const API = axios.create({
  baseURL: "https://elearning-2-2qs2.onrender.com/api", // 🔹 Updated to deployed API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔹 Optional: Attach token automatically if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
