import { Button, Checkbox, Flex } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { TaskTDO } from '../../../../entits/task/type';
import { ChangeTitle } from '../changeTitle/ChangeTitle.tsx';

interface PropsType{
  filterTask: TaskTDO[];
}

export const TaskList=({filterTask}:PropsType)=>{

  return (
    <Flex>
      {filterTask?.map((task) => (
          <Flex justify={'space-between'} key={task.id}>
            <Checkbox></Checkbox>
            <ChangeTitle title={task.title} saveTitle={()=>{}}/>
            <Flex gap={5}>
              <Button>
                <EditOutlined />
              </Button>
              <Button>
                <DeleteOutlined />
              </Button>
            </Flex>
          </Flex>

      ))}
    </Flex>
  );
}