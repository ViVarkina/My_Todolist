import { Button, Flex, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../../../../App/rootStore';
import { useState } from 'react';

export const AddTask=()=>{
  const [value, setValue] =useState<string>('')
  const dispatch = useAppDispatch()

  const onClickTask = () => {
    dispatch()
  }

  return (
    <Flex>
      <Input placeholder={'Add task'} onChange={(event)=>{
        setValue(event.target.value)
      }}/>
      <Button onClick={onClickTask}>
        <PlusOutlined />
      </Button>
    </Flex>
  )
}