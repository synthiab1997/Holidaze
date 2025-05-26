export const API_BASE = "https://v2.api.noroff.dev";
export const API_KEY = "4bd72ed3-6ff2-4433-9cc9-f9695c6ed25d";

// 🔐 Authentication Endpoints
export const API_AUTH = `${API_BASE}/auth`;
export const API_AUTH_REGISTER = `${API_AUTH}/register`;
export const API_AUTH_LOGIN = `${API_AUTH}/login`;

// 🏠 Venue Endpoints
export const API_VENUES = `${API_BASE}/holidaze/venues`;
export const API_VENUE_BY_ID = (id) => `${API_VENUES}/${id}`;
export const API_VENUE_BOOKINGS = (id) => `${API_VENUES}/${id}/bookings`;
export const API_USER_VENUES = `${API_VENUES}/owner`;

// 📅 Booking Endpoints
export const API_BOOKINGS = `${API_BASE}/holidaze/bookings`;
export const API_BOOKING_BY_ID = (id) => `${API_BOOKINGS}/${id}`;

// 👤 Profile Endpoints
export const API_PROFILES = `${API_BASE}/holidaze/profiles`;
export const API_PROFILE_BY_NAME = (name) => `${API_PROFILES}/${name}`;
export const API_PROFILE_BOOKINGS = (name) =>
  `${API_PROFILES}/${name}/bookings`;
export const API_PROFILE_VENUES = (name) => `${API_PROFILES}/${name}/venues`;
