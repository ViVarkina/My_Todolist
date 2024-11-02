import { Button, Flex, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useAppDispatch } from '../../../../App/rootStore';
import { addTodolist } from '../../../../entits/todolist/api/addTodolist.ts';

export const AddTodolist = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useAppDispatch()


  const onClick=()=>{
    if (!value){
      return
    }
    dispatch(addTodolist({title:value, description:""}))
  }

  return (
    <Flex gap={10}>
      <Input
        placeholder={'Add todolist'}
        style={{ width: 500 }}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <Button onClick={onClick}>
        <PlusOutlined />
      </Button>
    </Flex>
  );
};
