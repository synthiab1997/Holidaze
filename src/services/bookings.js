
import api from './api';

export const createBooking = async (booking) => {
  const response = await api.post('/bookings', booking);
  return response.data.data;
};

export const fetchUserBookings = async () => {
  const response = await api.get('/profiles/me/bookings');
  return response.data.data;
};

export const fetchVenueBookings = async (venueId) => {
  const response = await api.get(`/venues/${venueId}/bookings`);
  return response.data.data;
};
