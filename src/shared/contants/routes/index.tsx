export const paths = {
  main: () => '/',
  todolists:()=>`/todolists`,
  todolist:(id: string= ':todolistId')=>`/todolists/${id}`,
  login: () => `/login`,
};
