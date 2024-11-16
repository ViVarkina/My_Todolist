import { createSlice } from '@reduxjs/toolkit';
import { getMyTask } from '../api/getMyTask.ts';
import { TaskTDO } from '../type';


export interface InitialStateTask{
  tasks: TaskTDO[],
  isLoading: boolean
}

const initialState:InitialStateTask = {
  tasks: [],
  isLoading: false,
};

const taskSlice = createSlice({
  name:'task',
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(getMyTask.pending,(state)=>{
      state.isLoading = true
    })
      .addCase(getMyTask.fulfilled, (state, action)=>{
      state.tasks = action.payload
      })

  }
})

export {taskSlice}