
import axios from 'axios';
import { API_BASE, API_KEY } from './constants';

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
    'X-Noroff-API-Key': API_KEY,
  },
});

export default api;

/*const api = axios.create({
  baseURL: 'https://api.noroff.dev/api/v2/holidaze',
});

export default api;
*/