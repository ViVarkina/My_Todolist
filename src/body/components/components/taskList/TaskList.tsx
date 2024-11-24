import { Button, Checkbox, Flex } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { TaskTDO } from '../../../../entits/task/type';
import { ChangeTitle } from '../changeTitle/ChangeTitle.tsx';

interface PropsType{
  filterTask: TaskTDO[];
}

export const TaskList=({filterTask}:PropsType)=>{

  return (
    <ul>
      {filterTask?.map((task) => (
          <li key={task.id}>
            <Flex gap={5}>
              <Checkbox></Checkbox>
              <ChangeTitle title={task.title} saveTitle={()=>{}}/>
              <Flex gap={5}>
                <Button>
                  <DeleteOutlined />
                </Button>
              </Flex>
            </Flex>
          </li>
      ))}
    </ul>
  );
}