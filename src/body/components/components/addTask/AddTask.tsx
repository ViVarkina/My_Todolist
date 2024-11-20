import { Button, Flex, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../../../../App/rootStore';
import { useState } from 'react';
import { addTask } from '../../../../entits/task/api/addTask.ts';

interface PropsType{
  todolistId: string
}

export const AddTask=({todolistId}:PropsType)=>{
  const [value, setValue] =useState<string>('')
  const dispatch = useAppDispatch()

  const onClickTask = () => {
    dispatch(addTask({title:value, todolist_id:todolistId}))
  }

  return (
    <Flex>
      <Input placeholder={'Add task'} onChange={(e)=>{
        setValue(e.currentTarget.value)
      }}/>
      <Button onClick={onClickTask}>
        <PlusOutlined />
      </Button>
    </Flex>
  )
}