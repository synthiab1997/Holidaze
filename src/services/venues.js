// services/venues.js
import api from "./api"; // Axios instance with auth token

// Fetch all venues with optional filters (e.g., ?maxGuests=4)
export const fetchVenues = async (filters = {}) => {
  const response = await api.get("/venues", { params: filters });
  return response.data.data;
};

// Fetch single venue by ID
export const fetchVenueById = async (id) => {
  const response = await api.get(`/venues/${id}`);
  return response.data.data;
};

// Create a new venue (auth required)
export const createVenue = async (venueData) => {
  const response = await api.post("/venues", venueData);
  return response.data.data;
};

// Update an existing venue (auth required)
export const updateVenue = async (id, venueData) => {
  const response = await api.put(`/venues/${id}`, venueData);
  return response.data.data;
};

// Delete a venue (auth required)
export const deleteVenue = async (id) => {
  const response = await api.delete(`/venues/${id}`);
  return response.data.data;
};

// Fetch venues owned by the current user (auth required)
export const fetchUserVenues = async () => {
  const response = await api.get("/venues/owner");
  return response.data.data;
};
