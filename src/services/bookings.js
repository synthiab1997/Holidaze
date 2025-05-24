//previous code//
/*import api from './api';

export const createBooking = async (booking) => {
  const response = await api.post('/bookings', booking);
  return response.data;
};

export const fetchUserBookings = async () => {
  const response = await api.get('/bookings/user');
  return response.data;
};

export const fetchVenueBookings = async (venueId) => {
  const response = await api.get(`/bookings/venue/${venueId}`);
  return response.data;
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

*/

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
