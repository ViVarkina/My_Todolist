import { createSlice } from '@reduxjs/toolkit';

import { TodolistDTO } from '../type';
import { addTodolist, changeTodolist, getMyTodoList, getMyTodolists } from '@/entits';

interface InitialStateType {
  todoLists: TodolistDTO[];
  isLoading: boolean;
  todoList: TodolistDTO | undefined
}

const initialState: InitialStateType = {
  todoLists: [],
  isLoading: false,
  todoList: undefined

};

const todolistSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    clearTodolist:(state)=>{
      state.todoList = undefined
    }
  },
  extraReducers:(builder)=>{
    builder
      // .addCase(getMyTodolists.pending,(state)=>{
      //   state.isLoading = true
      // })
      .addCase(getMyTodolists.fulfilled,(state,action)=>{
        state.todoLists =action.payload
        state.isLoading = false;
      })
      .addCase(getMyTodolists.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getMyTodolists.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMyTodoList.fulfilled,(state, action)=>{
        state.todoList = action.payload
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
export const { clearTodolist} = todolistSlice.actions