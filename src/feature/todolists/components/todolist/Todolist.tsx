import { Button, Flex } from 'antd';
import css from './Todolist.module.css';
import { changeTodolist, TaskTDO } from '@/entits';
import { DeleteTodolist } from '../deleteTodolist/DeleteTodolist.tsx';
import { AddTask } from '../addTask/AddTask.tsx';
import { TaskList } from '../taskList/TaskList.tsx';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FilterTasks } from '../filterTasks/FilterTasks.tsx';
import { RootState, useAppDispatch } from '@/app';
import { ChangeTitle } from '@/feature/todolists';
import { Link } from 'react-router-dom';
import { paths } from '@/shared';

export interface Props {
  title: string;
  todolistId: string;
}

export type FilterStateType = 'All' | 'Active' | 'Closed';

export const Todolist = ({ title, todolistId }: Props) => {
  const dispatch = useAppDispatch();
  const [filterState, setFilterState] = useState<FilterStateType>('All');
  const { tasksObj } = useSelector((state: RootState) => state.taskStore);

  const tasks = tasksObj[todolistId];
  let filterTask: TaskTDO[] = [];

  if (filterState === 'All') {
    filterTask = tasks;
  } else if (filterState === 'Closed') {
    filterTask = tasks.filter((task) => !task.isCompleted);
  } else if (filterState === 'Active') {
    filterTask = tasks.filter((task) => task.isCompleted);
  }

  return (
    <Flex
      style={{ width: 550 }}
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
      <AddTask todolistId={todolistId} />
      <Flex vertical justify={'flex-start'} style={{ maxHeight: '200px', overflow: 'hidden' }}>
        <TaskList filterTask={filterTask} />
      </Flex>
      <Flex style={{ height: '20%' }} justify={'space-between'} align={'center'}>
        <FilterTasks filterState={filterState} setFilterState={setFilterState} />
        <Button>
          <Link to={paths.todolist(todolistId)}>Просмотр...</Link>
        </Button>
      </Flex>
    </Flex>
  );
};
