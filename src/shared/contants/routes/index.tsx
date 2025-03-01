export const paths = {
  main: () => '/',
  todolists:()=>'/todolists',
  todolist: (id: string = 'todolistId') => `/todolist/${id}`,
  login: () => `/login`,
};
