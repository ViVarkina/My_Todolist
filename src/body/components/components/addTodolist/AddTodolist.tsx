import { Button, Flex, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';

export const AddTodolist = () => {
  const [value, setValue] = useState<string>('');

  const onClick=()=>{
    console.log(value);
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
