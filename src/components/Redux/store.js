import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { searchReducer } from './searchSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  search: searchReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
