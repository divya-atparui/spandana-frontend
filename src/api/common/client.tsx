import axios from 'axios';

export const client = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "X-PrivateTenant": "spandana",
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
});
