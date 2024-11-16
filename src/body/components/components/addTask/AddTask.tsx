import { Button, Flex, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../../../../App/rootStore';

export const AddTask=()=>{
  const dispatch = useAppDispatch()

  const onClickTask = () => {

  }

  return (
    <Flex>
      <Input placeholder={'Add task'} />
      <Button onClick={onClickTask}>
        <PlusOutlined />
      </Button>
    </Flex>
  )
}