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
          <Route path={paths.main()} element={<div>Str</div>}/>
          <Route path={paths.todolists()} element={<TodolistPage/>} />
          <Route path={paths.todolist()} element={<h1>ggg</h1>}/>
        </Route>
        {/*неавотриз роут*/}
        <Route path={paths.login()} element={<LoginPage/>} />
        <Route path={'*'} element={<div>444</div>}/>
      </Routes>
    </BrowserRouter>
  );
};
