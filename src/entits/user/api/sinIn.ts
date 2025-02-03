import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiInstance, setAutHeaderLocalStore } from '@/shared';
import { SignInRequest, SingInResponse } from '../type';
import { autMe } from './autMe.ts';

export const signIn = createAsyncThunk<SingInResponse, SignInRequest>(
  'user/sigIn',
  async (params, { dispatch }) => {
    const response = await apiInstance.post<SingInResponse>(`users/login`, params);
    setAutHeaderLocalStore(response.data.access_token);
    dispatch(autMe());
    return response.data;
  }
);
