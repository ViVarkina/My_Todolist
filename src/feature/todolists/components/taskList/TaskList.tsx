import { Button, Checkbox, Flex } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { TaskTDO } from '@/entits';

import { useAppDispatch } from '@/app/rootStore';
import { deleteTask } from '@/entits';
import { updateTask } from '@/entits';
import { ChangeTitle } from '@/feature/todolists';

interface PropsType {
  filterTask: TaskTDO[];
}


export const TaskList = ({ filterTask }: PropsType) => {
  const dispatch = useAppDispatch();
  // const []

  return (
    <ul>
      {filterTask?.map((task) => (
        <li key={task.id}>
          <Flex gap={5}>
            <Checkbox
              checked={task.isCompleted}
              onChange={(event) => {
                dispatch(updateTask({ isCompleted: event.target.checked, taskId: task.id }));
              }}>
            </Checkbox>
            <ChangeTitle title={task.title}   saveTitle={(value: string, successCallback: () => void) => {
              dispatch(updateTask({ title: value, taskId: task.id, successCallback }))
            }}
                         disabled={task.isCompleted}
            />
            <Flex gap={5}>
              <Button disabled={task.isCompleted}>
                <DeleteOutlined   onClick={()=>{dispatch(deleteTask({ id: task.id }))}}/>
              </Button>
            </Flex>
          </Flex>
        </li>
      ))}
    </ul>
  );
};
