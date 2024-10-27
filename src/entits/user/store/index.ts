import { createSlice } from '@reduxjs/toolkit';
import { autMe } from '../api/autMe.ts';
import { deleteAutToken } from '../../../shared';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthorization: false,
  },
  reducers: {
    logOut: (state) => {
      deleteAutToken();
      state.isAuthorization = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(autMe.fulfilled, (state) => {
      state.isAuthorization = true;
    });
  },
});

export { userSlice };
export const { logOut } = userSlice.actions;
