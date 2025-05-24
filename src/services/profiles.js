import api from './api';

export const loginUser = async ({ email, password }) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

export const fetchUserProfile = async () => {
  const response = await api.get('/profiles/me');
  return response.data;
};

export const updateUserProfile = async (data) => {
  const response = await api.put('/profiles/me', data);
  return response.data;
};

/*
// 🔹 PROFILES
export const fetchProfile = async (name) => {
  const res = await api.get(`/profiles/${name}`);
  return res.data.data;
};

export const fetchProfileBookings = async (name) => {
  const res = await api.get(`/profiles/${name}/bookings`);
  return res.data.data;
};

export const fetchProfileVenues = async (name) => {
  const res = await api.get(`/profiles/${name}/venues`);
  return res.data.data;
}; */