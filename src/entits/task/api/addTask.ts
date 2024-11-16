import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiInstance } from '../../../shared';
import { TaskRequest, TaskTDO } from '../type';

const normalize=(data:TaskRequest): TaskTDO=>{
  const { todolist_id, due_date, created_at, is_completed,...rest} = data
  return {todolistId: todolist_id, dueDate: due_date, createdAt: created_at, isCompleted:is_completed, ...rest}
}

interface TaskType{

}


export const addTask= createAsyncThunk<TaskTDO, TaskRequest>('task/addTask', async ({...data})=>{
  const response = await apiInstance.post('/task', data)
  return normalize(response.data)
})