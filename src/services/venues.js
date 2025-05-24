import { API_BASE } from '../constants/api';
import { getHeaders } from '../utils/headers';

const VENUES_ENDPOINT = `${API_BASE}/venues`;

export const fetchVenues = async (filters = {}) => {
  const query = new URLSearchParams(filters).toString();
  const response = await fetch(`${VENUES_ENDPOINT}?${query}`, {
    headers: getHeaders(),
  });
  const data = await response.json();
  return data.data;
};

export const fetchVenueById = async (id) => {
  const response = await fetch(`${VENUES_ENDPOINT}/${id}`, {
    headers: getHeaders(),
  });
  const data = await response.json();
  return data.data;
};

export const createVenue = async (venueData) => {
  const response = await fetch(`${VENUES_ENDPOINT}`, {
    method: 'POST',
    headers: getHeaders(true),
    body: JSON.stringify(venueData),
  });
  const data = await response.json();
  return data.data;
};

export const updateVenue = async (id, venueData) => {
  const response = await fetch(`${VENUES_ENDPOINT}/${id}`, {
    method: 'PUT',
    headers: getHeaders(true),
    body: JSON.stringify(venueData),
  });
  const data = await response.json();
  return data.data;
};

export const deleteVenue = async (id) => {
  const response = await fetch(`${VENUES_ENDPOINT}/${id}`, {
    method: 'DELETE',
    headers: getHeaders(true),
  });
  const data = await response.json();
  return data.data;
};

export const fetchUserVenues = async () => {
  const response = await fetch(`${VENUES_ENDPOINT}/owner`, {
    headers: getHeaders(true),
  });
  const data = await response.json();
  return data.data;
};
