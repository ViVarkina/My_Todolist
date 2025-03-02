import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiInstance } from '@/shared';
import { TodolistDTO, TodolistResponse } from '@/entits/todolist';

const normalizedTodolist = (todolist: TodolistResponse): TodolistDTO => {
  const { user_id, created_at, ...rest } = todolist;
  return  { ...rest, userId: user_id, createdAt: created_at };
};

interface getTdl {
  id: string;
}

export const getMyTodoList = createAsyncThunk<TodolistDTO, getTdl>(
  'todolist/getMyTodoList',
  async ({ id }) => {
    const response = await apiInstance.get<TodolistResponse>(`/todolist/${id}`);

    return normalizedTodolist(response.data);
  }
);
