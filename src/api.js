
import axios from 'axios';
import { config } from './config';

const api = axios.create({
  baseURL: config.baseURL,
  timeout: config.apiTimeout,
  headers: {
    'Content-Type' : 'application/json' 
  },
  withCredentials: true,
});

export default api;
