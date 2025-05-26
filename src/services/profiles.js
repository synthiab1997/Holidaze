import api from "./api";

// 🔹 Get a specific profile by name
export const getProfile = async (name) => {
  const response = await api.get(`/profiles/${name}`);
  return response.data;
};

// 🔹 Get logged-in user profile (auth required) with bookings + venues
export const fetchUserProfile = async () => {
  const response = await api.get("/profiles/me?_bookings=true&_venues=true");
  return response.data.data; // ✅ make sure to access `.data.data`
};

// 🔹 Update logged-in user profile
export const updateUserProfile = async (data) => {
  const response = await api.put("/profiles/me", data);
  return response.data;
};

// 🔹 Log in existing user (keep this if used outside auth.js)
export const loginUser = async (email, password) => {
  const response = await api.post("/auth/login", { email, password });
  return response.data;
};

// 🔹 Get bookings for a profile
export const fetchProfileBookings = async (name) => {
  const response = await api.get(`/profiles/${name}/bookings`);
  return response.data;
};

// 🔹 Get venues for a profile
export const fetchProfileVenues = async (name) => {
  const response = await api.get(`/profiles/${name}/venues`);
  return response.data;
};
