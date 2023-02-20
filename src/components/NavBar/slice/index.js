import { injectReducer } from '../../../store';
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  userName: '',
  ava: '',
};

export const name = 'auth';
export const slice = createSlice({
  name,
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setAva: (state, action) => {
      state.ava = action.payload;
    },
  },
});

injectReducer(name, slice.reducer);

export const { setAva, setUserName } = slice.actions;
