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

  return await response.json();
};

export const registerUser = async ({ name, email, password, avatar = '', venueManager = false }) => {
  const payload = {
    name,
    email,
    password,
    venueManager,
  };

  if (avatar) {
    payload.avatar = {
      url: avatar,
      alt: `${name}'s avatar`
    };
  }

  console.log("🔍 Registering with payload:", payload);

  const response = await fetch(API_AUTH_REGISTER, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("❌ Register error:", data);
    throw new Error(data.errors?.[0]?.message || 'Registration failed.');
  }

  return data;
};

