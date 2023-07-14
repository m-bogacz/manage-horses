import axios from 'axios';

export const api_client = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});
