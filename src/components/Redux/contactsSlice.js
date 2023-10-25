import { createSlice } from '@reduxjs/toolkit';
import { addContacts, datesAll, deleteContact } from './operations';

export const initContacts = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const pending = state => {
  state.contacts.isLoading = true;
};

const rejected = (state, action) => {
  state.contacts.error = action.payload;
};

const addContactsFulfilled = (state, action) => {
  state.contacts.items.push(action.payload);
  state.contacts.isLoading = false;
};

const fetchContactsFulfilled = (state, action) => {
  state.contacts.items.push(...action.payload);
  state.contacts.isLoading = false;
};
const deleteContactsFulfilled = (state, action) => {
  const index = state.contacts.items.findIndex(
    el => el.id === action.payload.id
  );
  state.contacts.items.splice(index, 1);
  state.contacts.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initContacts,

  extraReducers: builder => {
    builder
      .addCase(datesAll.fulfilled, fetchContactsFulfilled)
      .addCase(datesAll.rejected, rejected)
      .addCase(datesAll.pending, pending)
      .addCase(addContacts.fulfilled, addContactsFulfilled)
      .addCase(addContacts.rejected, rejected)
      .addCase(addContacts.pending, pending)
      .addCase(deleteContact.fulfilled, deleteContactsFulfilled)
      .addCase(deleteContact.rejected, rejected)
      .addCase(deleteContact.pending, pending);
  },
});

export const contactsReducer = contactsSlice.reducer;
