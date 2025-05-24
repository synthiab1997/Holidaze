
import axios from 'axios';
import { API_BASE, API_KEY } from './constants';

/*const api = axios.create({
  baseURL: 'https://api.noroff.dev/api/v2/holidaze',
});

export default api;

// 🔹 VENUES
export const fetchVenues = async () => {
  const res = await api.get('/venues');
  return res.data.data;
};

export const fetchVenueDetails = async (id) => {
  const res = await api.get(`/venues/${id}`);
  return res.data.data;
};

// 🔹 BOOKINGS
export const fetchBookings = async () => {
  const res = await api.get('/bookings');
  return res.data.data;
};

export const createBooking = async (bookingData) => {
  const res = await api.post('/bookings', bookingData);
  return res.data.data;
};

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
};*/
const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
    'X-Noroff-API-Key': API_KEY,
  },
});

export default api;
