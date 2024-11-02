import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { userSlice } from '../../entits';
import { todolistSlice } from '../../entits/todolist/store';

export const rootStore = configureStore({
  reducer: {
    userStore: userSlice.reducer,
    todolistStore: todolistSlice.reducer,
  },
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
