import { createAsyncThunk } from '@reduxjs/toolkit';
import { TodolistDTO, TodolistResponse } from '../type';
import { apiInstance } from '@/shared';

const normalizeTodolist = (todolist: TodolistResponse[]): TodolistDTO[] => {
  return todolist.map((tdl) => {
    const { created_at, user_id, ...rest } = tdl;
    return { createdAt: created_at, userId: user_id, ...rest };
  });
};

export const getMyTodolist = createAsyncThunk<TodolistDTO[], void>('todolist/getMyTodolist', async () => {
  const response = await apiInstance.get<TodolistResponse[]>('/todolist');
  return normalizeTodolist(response.data)
});
