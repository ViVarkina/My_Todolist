import { createAsyncThunk } from '@reduxjs/toolkit';
import { TodolistDTO, TodolistRequest, TodolistResponse } from '../type';
import { apiInstance } from '../../../shared';

const normalizeData=(data: TodolistResponse): TodolistDTO =>{
  const {created_at, user_id, ...rest}= data
  return {createdAt: created_at, userId: user_id, ...rest}
}

export const addTodolist = createAsyncThunk<TodolistDTO, TodolistRequest>(
  'todolist/addTodolist',
  async ({...data}) => {
    const response = await apiInstance.post('/todolist',data);
    return normalizeData(response.data)
  }
);
