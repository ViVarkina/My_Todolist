import { Button, Flex } from 'antd';
import css from './Todolist.module.css';
import { ChangeTitle } from '../changeTitle/ChangeTitle.tsx';
import { useAppDispatch } from '../../../../App/rootStore';
import { changeTodolist } from '../../../../entits/todolist/api/changeTodolist.ts';
import { DeleteTodolist } from '../deleteTodolist/DeleteTodolist.tsx';
import { AddTask } from '../addTask/AddTask.tsx';
import { TaskList } from '../taskList/TaskList.tsx';

export interface Props {
  title: string;
  todolistId: string;
}

export const Todolist = ({ title, todolistId }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <Flex
      style={{ width: 600 }}
      vertical
      gap={12}
      className={css.todolist}
      justify={'space-between'}
    >
      <Flex justify={'space-between'} gap={5}>
        <ChangeTitle
          title={title}
          saveTitle={(value, callBack) => {
            dispatch(changeTodolist({ todolistId, title: value, successCallback: callBack }));
          }}
        />
        <DeleteTodolist todolistId={todolistId} />
      </Flex>
      <AddTask />
      <TaskList />
      <Flex gap={5}>
        <Button>All</Button>
        <Button>Active</Button>
        <Button>Closed</Button>
      </Flex>
    </Flex>
  );
};
