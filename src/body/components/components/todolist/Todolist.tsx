import { Button, Flex } from 'antd';
import css from './Todolist.module.css';
import { ChangeTitle } from '../changeTitle/ChangeTitle.tsx';
import { RootState, useAppDispatch } from '../../../../App/rootStore';
import { changeTodolist } from '../../../../entits/todolist/api/changeTodolist.ts';
import { DeleteTodolist } from '../deleteTodolist/DeleteTodolist.tsx';
import { AddTask } from '../addTask/AddTask.tsx';
import { TaskList } from '../taskList/TaskList.tsx';
import { TaskTDO } from '../../../../entits/task/type';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FilterTasks } from '../filterTasks/FilterTasks.tsx';

export interface Props {
  title: string;
  todolistId: string;
}

export type FilterStateType = 'All' | 'Active' | 'Closed';

export const Todolist = ({ title, todolistId }: Props) => {
  const dispatch = useAppDispatch();
  const [filterState, setFilterState] = useState<FilterStateType>('All');
  console.log(setFilterState);
  const { tasksObj } = useSelector((state: RootState) => state.taskStore);


  const tasks = tasksObj[todolistId];
  let filterTask: TaskTDO[] = []

  if (filterState === 'All') {
    filterTask = tasks;
  } else if (filterState === 'Active') {
    filterTask = tasks.filter((task) => !task.isCompleted);
  } else if (filterState === 'Closed') {
    filterTask = tasks.filter((task) => task.isCompleted);
  }

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
      <AddTask todolistId={todolistId}/>
      <TaskList filterTask={filterTask}/>
      <FilterTasks/>
    </Flex>
  );
};
