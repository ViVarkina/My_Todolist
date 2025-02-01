import { Todolist } from './components/todolist/Todolist.tsx';
import { Flex } from 'antd';
import css from './components/todolist/Todolist.module.css';
import { AddTodolist } from './components/addTodolist/AddTodolist.tsx';
import { RootState, useAppDispatch } from '../../App/rootStore';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMyTodolist } from '../../entits/todolist/api/getMyTodolist.ts';
import { getMyTask } from '../../entits/task/api/getMyTask.ts';


export const TodoLists=()=>{
  const dispatch = useAppDispatch()
  const {todoLists}= useSelector((state:RootState )=> state.todolistStore)

  useEffect(() => {
    dispatch(getMyTodolist())
    dispatch(getMyTask())
  }, []);


  return(
    <Flex className={css.container} align={'center'} vertical gap={24} style={{height:'100vh'}}>
      <AddTodolist/>
      <Flex wrap={'wrap'} className={css.todolists} gap={16} justify={"center"} style={{height:'50%'}}>
        {todoLists.map((todolist)=>{
          return <Todolist title={todolist.title} todolistId={todolist.id} key={todolist.id} />
        })}
      </Flex>
    </Flex>
  )
}