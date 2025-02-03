import { createAsyncThunk } from '@reduxjs/toolkit';
import { TaskRequest, TaskResponse, TaskTDO } from '../type';
import { apiInstance } from '../../../shared';

const normalize=(data:TaskResponse): TaskTDO=>{
  const { todolist_id, due_date, created_at, is_completed,...rest} = data
  return {todolistId: todolist_id, dueDate: due_date, createdAt: created_at, isCompleted:is_completed, ...rest}
}
interface CommonFunction {
  successCallback: () => void;
}

export const addTask= createAsyncThunk<TaskTDO, TaskRequest & CommonFunction>('task/addTask', async ({successCallback,...data})=>{
  successCallback?.()
  const response = await apiInstance.post('/task', data)
  return normalize(response.data)
})