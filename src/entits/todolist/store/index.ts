import { createSlice } from '@reduxjs/toolkit';
import { getMyTodolist } from '../api/getMyTodolist.ts';
import { addTodolist } from '../api/addTodolist.ts';
import { TodolistDTO } from '../type';
import { changeTodolist } from '../api/changeTodolist.ts';

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
      .addCase(changeTodolist.pending, (state)=>{
        state.isLoading =true
      })
      .addCase(changeTodolist.fulfilled, (state, action)=>{
        state.todoLists = [...state.todoLists.filter((el)=>el.id != action.payload.id), action.payload]
      //   TODO заменить эл по индексу в массиве (splice)
      })

  }
})

export { todolistSlice };