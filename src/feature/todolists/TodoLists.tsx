import { Flex } from 'antd';
import { RootState, useAppDispatch } from '@/app';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMyTask, getMyTodolists } from '@/entits';
import { AddTodolist, Todolist } from './components';


export const TodoLists=()=>{
  const dispatch = useAppDispatch()
  const {todoLists}= useSelector((state:RootState )=> state.todolistStore)

  useEffect(() => {
    dispatch(getMyTodolists())
    dispatch(getMyTask())
  }, []);


  return(
    <Flex  align={'center'} vertical gap={24}>
      <AddTodolist/>
      <Flex wrap={'wrap'} gap={16} justify={'flex-start'} align={'flex-start'}>
        {todoLists.map((todolist)=>{
          return <Todolist title={todolist.title} todolistId={todolist.id} key={todolist.id} />
        })}
      </Flex>
    </Flex>
  )
}