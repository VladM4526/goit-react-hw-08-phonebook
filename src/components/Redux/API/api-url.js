import axios from 'axios';

const BASE_URL = 'https://6536827fbb226bb85dd23d7a.mockapi.io';

axios.defaults.baseURL = BASE_URL;

export const fetchDatesAll = signal => {
  return axios.get('contacts', { signal });
};

export const addNewContacts = contacts => {
  return axios.post('contacts', contacts);
};

export const delContact = id => {
  return axios.delete(`contacts/${id}`);
};
