import { Button, Checkbox, Flex, Input } from 'antd';
import css from './Todolist.module.css'
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';


export const Todolist=()=>{

  return(
        <Flex style={{ width: 600}} vertical gap={12} className={css.todolist} justify={'space-between'}>
          <Flex justify={'space-between'}>
            <h3>Name</h3>
            <Flex gap={5}>
              <Button><EditOutlined /></Button>
              <Button><DeleteOutlined /></Button>
            </Flex>
          </Flex>
          <Flex>
            <Input placeholder={"Add task"}/>
            <Button><PlusOutlined/></Button>
          </Flex>
          <Flex justify={'space-between'}>
            <Checkbox></Checkbox>
            <h3>Name</h3>
            <Flex gap={5}>
              <Button><EditOutlined /></Button>
              <Button><DeleteOutlined /></Button>
            </Flex>
          </Flex>
          <Flex gap={5}>
            <Button>All</Button>
            <Button>Active</Button>
            <Button>Closed</Button>
          </Flex>
        </Flex>
  )
}