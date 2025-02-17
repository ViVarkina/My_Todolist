import {Flex } from 'antd';
import css from './Todolist.module.css';
import { changeTodolist } from '@/entits';
import { DeleteTodolist } from '../deleteTodolist/DeleteTodolist.tsx';
import { AddTask } from '../addTask/AddTask.tsx';
import { TaskList } from '../taskList/TaskList.tsx';
import { TaskTDO } from '@/entits';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FilterTasks } from '../filterTasks/FilterTasks.tsx';
import { RootState, useAppDispatch } from '@/app';
import { ChangeTitle } from '@/feature/todolists';

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
  } else if (filterState === 'Closed') {
    filterTask = tasks.filter((task) => !task.isCompleted);
  } else if (filterState === 'Active') {
    filterTask = tasks.filter((task) => task.isCompleted);
  }

  return (
    <Flex
      style={{ width: 550 , }}
      vertical
      gap={12}
      className={css.todolist}
      justify={'space-between'}

    >
      <Flex justify={'space-between'} gap={5} style={{height:'20%'}}>
        <ChangeTitle
          title={title}
          saveTitle={(value, callBack) => {
            dispatch(changeTodolist({ todolistId, title: value, successCallback: callBack }));
          }}
        />
        <DeleteTodolist todolistId={todolistId} />
      </Flex>
      <Flex vertical  justify={'flex-top'} >
        <AddTask todolistId={todolistId}/>
        <TaskList filterTask={filterTask}/>
      </Flex>
      <Flex style={{height:'20%'}} justify={'flex-end'}vertical>
        <FilterTasks filterState={filterState} setFilterState={setFilterState}/>
      </Flex>


    </Flex>
  );
};
