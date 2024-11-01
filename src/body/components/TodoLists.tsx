import { Todolist } from './components/todolist/Todolist.tsx';
import { Flex } from 'antd';

import css from './components/todolist/Todolist.module.css';
import { AddTodolist } from './components/addTodolist/AddTodolist.tsx';

export const TodoLists=()=>{
  return(
    <Flex className={css.container} align={'center'} vertical gap={24}>
      <AddTodolist/>
      <Flex wrap={'wrap'} className={css.todolists} gap={16} justify={"center"}>
        <Todolist/>
      </Flex>
    </Flex>
  )
}