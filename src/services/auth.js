import { API_AUTH_LOGIN, API_AUTH_REGISTER } from './constants';

export const loginUser = async (email, password) => {
  const response = await fetch(API_AUTH_LOGIN, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.errors?.[0]?.message || 'Login failed.');
  }

  return await response.json(); // includes accessToken, name, email, etc.
};

export const registerUser = async ({ name, email, password, avatar = '', venueManager = false }) => {
  const response = await fetch(API_AUTH_REGISTER, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password, avatar, venueManager }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.errors?.[0]?.message || 'Registration failed.');
  }

  return await response.json(); // includes id, name, email, etc.
};
