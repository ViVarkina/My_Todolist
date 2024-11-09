import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiInstance } from '../../../shared';
import { TodolistDTO, TodolistResponse } from '../type';

const normalizeData=(data: TodolistResponse): TodolistDTO =>{
  const {created_at, user_id, ...rest}= data
  return {createdAt: created_at, userId: user_id, ...rest}
}

interface CommonFunction {
  successCallback: () => void;
  todolistId: string;
}

export const changeTodolist = createAsyncThunk<TodolistDTO, Partial<TodolistResponse & CommonFunction>>('todolist/changeTodolist', async ({successCallback,todolistId,...data}) => {
  const response = await apiInstance.patch(`todolist/${todolistId}`, data);
  successCallback?.()
  return normalizeData(response.data)
});
