import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL;
// const isServer = typeof window === 'undefined';

export const api_client = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
