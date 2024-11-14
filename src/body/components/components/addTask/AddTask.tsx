import { Button, Flex, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export const AddTask=()=>{

  return (
    <Flex>
      <Input placeholder={'Add task'} />
      <Button>
        <PlusOutlined />
      </Button>
    </Flex>
  )
}