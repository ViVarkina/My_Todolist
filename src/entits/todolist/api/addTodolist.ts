import { createAsyncThunk } from '@reduxjs/toolkit';
import { TodolistDTO, TodolistRequest, TodolistResponse } from '../type';
import { apiInstance } from '@/shared';

const normalizeData=(data: TodolistResponse): TodolistDTO =>{
  const {created_at, user_id, ...rest}= data
  return {createdAt: created_at, userId: user_id, ...rest}
}

interface CommonFunction {
  successCallback: () => void;
}

export const addTodolist = createAsyncThunk<TodolistDTO, TodolistRequest & CommonFunction>(
  'todolist/addTodolist',
  async ({successCallback,...data}) => {
    successCallback?.()
    const response = await apiInstance.post('/todolist',data);
    return normalizeData(response.data)
  }
);
