import axios from "axios";
import { API_KEY } from "./constants"; 

const api = axios.create({
  baseURL: "https://v2.api.noroff.dev/holidaze",
  headers: {
    "Content-Type": "application/json",
    ...(API_KEY && { "X-API-Key": API_KEY }), 
  },
});

// ✅ Automatically attach Bearer token from localStorage to each request
api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.accessToken) {
    config.headers.Authorization = `Bearer ${user.accessToken}`;
  }
  return config;
});

export default api;
