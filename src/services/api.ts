import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://borschthouse.onrender.com',
  timeout: 20000,
});
