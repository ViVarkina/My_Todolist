import { Button, Checkbox, Flex } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { TaskTDO } from '../../../../entits/task/type';
import { ChangeTitle } from '../changeTitle/ChangeTitle.tsx';
import { useAppDispatch } from '../../../../App/rootStore';
import { deleteTask } from '../../../../entits/task/api/deleteTask.ts';
import { updateTask } from '../../../../entits/task/api/updateTask.ts';

interface PropsType {
  filterTask: TaskTDO[];
}

export const TaskList = ({ filterTask }: PropsType) => {
  const dispatch = useAppDispatch();

  return (
    <ul>
      {filterTask?.map((task) => (
        <li key={task.id}>
          <Flex gap={5}>
            <Checkbox></Checkbox>
            <ChangeTitle title={task.title} saveTitle={(value: string, successCallback: () => void) => {
              dispatch(updateTask({ title: value, taskId: task.id, successCallback }))
            }}/>
            <Flex gap={5}>
              <Button>
                <DeleteOutlined onClick={()=>{dispatch(deleteTask({ id: task.id }))}}/>
              </Button>
            </Flex>
          </Flex>
        </li>
      ))}
    </ul>
  );
};
