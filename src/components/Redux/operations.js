import { createAsyncThunk } from '@reduxjs/toolkit';
import { addNewContacts, delContact, fetchDatesAll } from './API/api-url';

export const datesAll = createAsyncThunk(
  'contacts/fetchAll',
  async (signal, thunkApi) => {
    try {
      const { data } = await fetchDatesAll(signal);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (contacts, thunkApi) => {
    try {
      const { data } = await addNewContacts(contacts);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const { data } = await delContact(id);
      return data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
