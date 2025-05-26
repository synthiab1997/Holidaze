import axios from 'axios';

const api = axios.create({
  baseURL: 'https://v2.api.noroff.dev/holidaze',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.accessToken) {
    config.headers.Authorization = `Bearer ${user.accessToken}`;
  }
  return config;
});

export default api;
