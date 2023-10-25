import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchDatesAll = signal => {
  return axios.get('contacts', { signal });
};

export const addNewContacts = contacts => {
  return axios.post('contacts', contacts);
};

export const delContact = id => {
  return axios.delete(`contacts/${id}`);
};

export const authHeader = token => {
  axios.defaults.headers.common.Authorization = `User ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = credentials => {
  return axios.post('users/signup', credentials);
};

export const loginIn = infologin => {
  return axios.post('users/login', infologin);
};

export const logoutUser = () => {
  return axios.post('users/logout');
};

export const refreshLogin = () => {
  return axios.get('users/current');
};
