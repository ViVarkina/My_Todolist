import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthRoute } from '../auth-route';
import { paths } from '@/shared';
import { LoginPage, TodolistPage } from '@/page';

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*приватный роуты*/}
        <Route element={<AuthRoute />}>
          <Route path={paths.main.route()} element={<div>Str</div>}/>
          <Route path={paths.todolist.route()} element={<TodolistPage/>} />
        </Route>
        {/*неавотриз роут*/}
        <Route path={paths.login.route()} element={<LoginPage/>} />
        <Route path={'*'} element={<div>444</div>}/>
      </Routes>
    </BrowserRouter>
  );
};
