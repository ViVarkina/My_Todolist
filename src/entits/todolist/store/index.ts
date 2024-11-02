import { createSlice } from '@reduxjs/toolkit';
import { getMyTodolist } from '../api/getMyTodolist.ts';
import { addTodolist } from '../api/addTodolist.ts';
import { TodolistDTO } from '../type';

interface InitialStateType {
  todoLists: TodolistDTO[];
  isLoading: boolean;
}

const initialState: InitialStateType = {
  todoLists: [],
  isLoading: false,
};

const todolistSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder
      .addCase(getMyTodolist.pending,(state)=>{
        state.isLoading = true
      })
      .addCase(getMyTodolist.fulfilled,(state,action)=>{
        state.todoLists =action.payload
        state.isLoading = false;
      })
      .addCase(getMyTodolist.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addTodolist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTodolist.fulfilled, (state, action) => {
        state.todoLists.unshift(action.payload);
        state.isLoading = false;
      })

  }
})

export { todolistSlice };