import { createSlice } from '@reduxjs/toolkit';

const searchInit = '';

export const searchSlice = createSlice({
  name: 'search',
  initialState: searchInit,
  reducers: {
    getSearch: {
      reducer(state, action) {
        return action.payload;
      },
    },
  },
});

export const { getSearch } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
