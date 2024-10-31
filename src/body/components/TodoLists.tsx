import { Todolist } from './components/todolist/Todolist.tsx';
import { Button, Flex, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import css from './components/todolist/Todolist.module.css';

export const TodoLists=()=>{
  return(
    <Flex className={css.container} align={'center'} vertical gap={24}>
      <Flex gap={10}>
        <Input placeholder={"Add todolist"} style={{width:500}}/>
        <Button><PlusOutlined/></Button>
      </Flex>
      <Flex wrap={'wrap'} className={css.todolists} gap={16} justify={"center"}>
        <Todolist/>

      </Flex>
    </Flex>
  )
}