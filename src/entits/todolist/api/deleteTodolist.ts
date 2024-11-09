import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiInstance } from '../../../shared';
import { DeleteTodolistParams } from '../type';
import { getMyTodolist } from './getMyTodolist.ts';

export const deleteTodolist = createAsyncThunk<void, DeleteTodolistParams>(
  'todolist/deleteTodolist',
  async ({ todolistId }, {dispatch}) => {
    await apiInstance.delete(`todolist/${todolistId}`);
    dispatch(getMyTodolist());
  }
);
