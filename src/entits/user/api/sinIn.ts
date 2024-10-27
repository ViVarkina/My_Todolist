import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiInstance } from '../../../shared';
import { SignInRequest, SingInResponse } from '../type';



export const signIn = createAsyncThunk<SingInResponse, SignInRequest>('user/sigIn', async () => {
  const response = await apiInstance.post<SingInResponse>(`users/login`, {});
  console.log(response.data);
  return response.data
});
