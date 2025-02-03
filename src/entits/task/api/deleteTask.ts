import { createAsyncThunk } from '@reduxjs/toolkit';
import { TaskResponse } from '../type';
import { apiInstance } from '@/shared';
import { getMyTask } from './getMyTask.ts';

interface DeleteTaskRequest{
  id: string;
}

export const deleteTask = createAsyncThunk<void, DeleteTaskRequest>('task/deleteTask', async ({id}, {dispatch})=>{
  await apiInstance.delete<TaskResponse>(`/task/${id}`);
  dispatch(getMyTask());
})