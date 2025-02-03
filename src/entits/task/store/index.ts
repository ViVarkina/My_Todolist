import { createSlice } from '@reduxjs/toolkit';
import { getMyTask } from '@/entits/task';
import { TaskTDO } from '../type';
import { addTask } from '@/entits/task';
import { updateTask } from '@/entits/task';

export interface TaskType {
  [key: string]: TaskTDO[];
}

export interface InitialStateTask{
  tasks: TaskTDO[],
  isLoading: boolean
  tasksObj: TaskType
}

const initialState:InitialStateTask = {
  tasks: [],
  isLoading: false,
  tasksObj:{}
};

const taskSlice = createSlice({
  name:'task',
  initialState,
  reducers:{},
  extraReducers:(builder)=> {
    builder.addCase(getMyTask.pending, (state) => {
      state.isLoading = true
    })
      .addCase(getMyTask.fulfilled, (state, action) => {
        state.tasks = action.payload;

        const taskObj: TaskType = {};
        action.payload.forEach((el) => {
          if (taskObj[el.todolistId]) {
            taskObj[el.todolistId] = [...taskObj[el.todolistId], el]
          } else {
            taskObj[el.todolistId] = [el]
          }
        });
        state.tasksObj = taskObj;
        state.isLoading = false;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        const taskObj = { ...state.tasksObj };
        if (taskObj[action.payload.todolistId]) {
          taskObj[action.payload.todolistId] = [
            action.payload,
            ...taskObj[action.payload.todolistId],
          ];
        } else {
          taskObj[action.payload.todolistId] = [action.payload];
        }
        state.tasksObj = taskObj;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const taskObj = { ...state.tasksObj };
        if (taskObj[action.payload.todolistId]) {
          taskObj[action.payload.todolistId] = [
            action.payload,
            ...taskObj[action.payload.todolistId].filter(el => (el.id !== action.payload.id))
          ]
        }
        state.tasksObj = taskObj;
      });
  }
})

export {taskSlice}