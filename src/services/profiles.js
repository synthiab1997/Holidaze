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
