import { createAsyncThunk } from '@reduxjs/toolkit';
import { TaskResponse, TaskTDO, TaskUpdateRequest } from '../type';
import { apiInstance } from '../../../shared';

interface CommonData{
  taskId:string
  successCallback?:()=>void
}

const normalize=(data:TaskResponse): TaskTDO=>{
  const { todolist_id, due_date, created_at, is_completed,...rest} = data
  return {todolistId: todolist_id, dueDate: due_date, createdAt: created_at, isCompleted:is_completed, ...rest}
}

export const updateTask= createAsyncThunk<TaskTDO, TaskUpdateRequest & CommonData>('task/updateTask', async ({taskId, isCompleted:is_completed, title, successCallback})=>{
  successCallback?.()
  const response = await apiInstance.patch<TaskResponse>(`/task/${taskId}`, { is_completed,title});
  return normalize(response.data)
})