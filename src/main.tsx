import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { paths } from '@/shared';
import { LoginPage, TodolistPage } from '@/page';
import { AuthRoute, rootStore } from '@/app';

createRoot(document.getElementById('root')!).render(
  <Provider store={rootStore}>
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route path={paths.todolist.route()} element={<TodolistPage />} />
        </Route>
        <Route path={paths.login.route()} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
