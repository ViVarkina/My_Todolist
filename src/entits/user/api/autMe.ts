import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiInstance, setAutHeader } from '@/shared';

export const autMe = createAsyncThunk<void, void>('user/autMe', async () => {
  setAutHeader();
  const response = await apiInstance.get('users/me', {});
  return response.data;
});
