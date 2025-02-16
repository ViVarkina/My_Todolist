import { Flex } from 'antd';
import css from './components/todolist/Todolist.module.css';
import { RootState, useAppDispatch } from '@/app';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMyTodolist } from '@/entits';
import { getMyTask } from '@/entits';
import { AddTodolist, Todolist } from '@/feature/todolists/components';


export const TodoLists=()=>{
  const dispatch = useAppDispatch()
  const {todoLists}= useSelector((state:RootState )=> state.todolistStore)

  useEffect(() => {
    dispatch(getMyTodolist())
    dispatch(getMyTask())
  }, []);


  return(
    <Flex className={css.container} align={'center'} vertical gap={24}>
      <AddTodolist/>
      <Flex wrap={'wrap'} className={css.todolists} gap={16}  >
        {todoLists.map((todolist)=>{
          return <Todolist title={todolist.title} todolistId={todolist.id} key={todolist.id} />
        })}
      </Flex>
    </Flex>
  )
}