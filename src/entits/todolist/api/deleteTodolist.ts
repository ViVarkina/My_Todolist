import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiInstance } from '@/shared';
import { DeleteTodolist } from '../type';
import { getMyTodolists } from '@/entits';


export const deleteTodolist = createAsyncThunk<void, DeleteTodolist>(
  'todolist/deleteTodolist',
  async ({ todolistId }, {dispatch}) => {
    await apiInstance.delete(`todolist/${todolistId}`);
    dispatch(getMyTodolists());
  }
);
