import axios from 'axios';
import { ACCESS_TOKEN, BASE_URL } from './constans.ts';

export const apiInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const setAutHeader = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  if (accessToken) {
    apiInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }
};

export const setAutHeaderLocalStore = (token: string) => {
  if (token) {
    localStorage.setItem(ACCESS_TOKEN, token);
  }
};

export const deleteAutToken = () => {
  localStorage.removeItem(ACCESS_TOKEN);
};
