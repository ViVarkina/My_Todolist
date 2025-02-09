import './App.module.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '@/page/login';
import { TodolistPage } from '@/page';
import { paths } from '@/shared';
import { AuthRoute, rootStore } from '@/App';


export const WrapperApp = () => {
  return (
    <Provider store={rootStore}>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthRoute/>}>
            <Route path={paths.todolist.route()} element={<TodolistPage />} />
          </Route>
          <Route path={paths.login.route()} element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

