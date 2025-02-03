import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiInstance } from '@/shared';
import { TaskResponse, TaskTDO } from '../type';

const normalizeTask=(taskList:TaskResponse[]):TaskTDO[]=>{
  return taskList.map((task)=>{
      const { todolist_id, due_date, created_at, is_completed,...rest} =task
      return {todolistId: todolist_id, dueDate: due_date, createdAt: created_at, isCompleted:is_completed, ...rest}
  })
}

export const getMyTask = createAsyncThunk<TaskTDO[], void>("task/getMyTask", async ()=>{
  const response = await apiInstance.get<TaskResponse[]>('/task')
  return normalizeTask(response.data)
})