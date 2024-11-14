import { Button, Checkbox, Flex } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

export const TaskList=()=>{

  return (
    <Flex justify={'space-between'}>
      <Checkbox></Checkbox>
      <h3>Name</h3>
      <Flex gap={5}>
        <Button>
          <EditOutlined />
        </Button>
        <Button>
          <DeleteOutlined />
        </Button>
      </Flex>
    </Flex>
  )
}