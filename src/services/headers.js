import { API_KEY } from './constants';

export function getHeaders(authRequired = false) {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (authRequired) {
    const token = localStorage.getItem('token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  headers['X-Noroff-API-Key'] = API_KEY;
  return headers;
}
