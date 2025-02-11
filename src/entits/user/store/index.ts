import { createSlice } from '@reduxjs/toolkit';
import { autMe } from '@/entits';
import { deleteAutToken } from '@/shared';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthorization: false,
    isLoading: false,
    isInitialize:false,
  },
  reducers: {
    logOut: (state) => {
      deleteAutToken();
      state.isAuthorization = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(autMe.fulfilled, (state) => {
        state.isAuthorization = true;
        state.isLoading = true;
        state.isInitialize = true
      })
      .addCase(autMe.rejected, (state) => {
        state.isLoading = true;
        state.isInitialize=true
      });
  },
});

export { userSlice };
export const { logOut } = userSlice.actions;
