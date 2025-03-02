import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthRoute } from '../auth-route';
import { paths } from '@/shared';
import { LoginPage, MainPage, TodolistPage } from '@/page';
import { TodolistsPage } from '@/page/todolists';

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*приватный роуты*/}
        <Route element={<AuthRoute />}>
          <Route path={paths.main()} element={<MainPage/>}/>
          <Route path={paths.todolists()} element={<TodolistsPage/>} />
          <Route path={paths.todolist()} element={<TodolistPage/>}/>
        </Route>
        {/*неавотриз роут*/}
        <Route path={paths.login()} element={<LoginPage/>} />
        <Route path={'*'} element={<div>444</div>}/>
      </Routes>
    </BrowserRouter>
  );
};
