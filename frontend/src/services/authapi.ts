import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3500/api/auth";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Attach JWT token automatically if available
api.interceptors.request.use(
  (config) => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle unauthorized responses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("authUser");
      window.location.href = "/login"; // redirect to login
    }
    return Promise.reject(error);
  }
);
