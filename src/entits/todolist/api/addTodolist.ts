import { createAsyncThunk } from '@reduxjs/toolkit';
import { TodolistRequest } from '../type';
import { apiInstance } from '../../../shared';

export const addTodolist = createAsyncThunk<void, TodolistRequest>(
  'todolist/addTodolist',
  async () => {
    const response = await apiInstance.post('/todolist');
    return;
  }
);
