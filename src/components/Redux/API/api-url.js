import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com/';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

axios.defaults.baseURL = BASE_URL;

export const fetchDatesAll = signal => {
  return axios.get('contacts', { signal });
};

export const addNewContacts = contact => {
  return axios.post('contacts', contact);
};

export const delContact = id => {
  return axios.delete(`contacts/${id}`);
};

export const signUp = credentials => {
  return axios.post('users/signup', credentials);
};

export const loginUser = credentials => {
  return axios.post('users/login', credentials);
};

export const logoutUser = () => {
  return axios.post('users/logout');
};

export const refreshLogin = () => {
  return axios.get('users/current');
};
