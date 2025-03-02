import { useEffect } from 'react';
import { getMyTask, getMyTodoList } from '@/entits';
import { RootState, useAppDispatch } from '@/app';
import { useSelector } from 'react-redux';
import { Todolist } from '@/feature/todolists';
import { useNavigate, useParams } from 'react-router-dom';
import { clearTodolist } from '@/entits/todolist/store';
import { Button } from 'antd';


export const TodolistWrapper=()=>{
  const { todolistId  }=useParams()
  const dispatch = useAppDispatch()
  const {todoList}= useSelector((state:RootState )=> state.todolistStore)
  const navigate = useNavigate()

  useEffect(() => {
    if (todolistId){
      dispatch(getMyTodoList({ id: todolistId}))
      dispatch(getMyTask())
    }
    return ()=>{dispatch(clearTodolist())}
  }, []);
  if(!todolistId||!todoList){
    return null
  }


  return (
    <>
      <Button onClick={()=>{
        navigate(-1)
      }}>Назад</Button>
      <Todolist title={todoList.title} todolistId={todolistId}/>
    </>

  )
}