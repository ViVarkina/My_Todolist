import { Button, Checkbox, Flex } from 'antd';
import { CaretDownOutlined, CaretUpOutlined, DeleteOutlined } from '@ant-design/icons';
import { TaskTDO } from '@/entits';
import css from './TaskList.module.css';
import { useAppDispatch } from '@/app/rootStore';
import { deleteTask, updateTask } from '@/entits';
import { ChangeTitle } from '@/feature/todolists';
import { useState } from 'react';
import { COUNT_TASK } from '@/shared';

interface PropsType {
  filterTask: TaskTDO[];
}

const getSliceTask = (task: TaskTDO[]): TaskTDO[] => {
  return [...task].slice(0, COUNT_TASK);
};

export const TaskList = ({ filterTask }: PropsType) => {
  const dispatch = useAppDispatch();
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const [sliceTask, setSliseTask] = useState(getSliceTask(filterTask));

  return (
    <div style={{ position: 'relative' }}>
      <Button
        onClick={() => {
          setIsCollapsed(!isCollapsed);
          if (isCollapsed) {
            setSliseTask(filterTask);
          } else {
            setSliseTask(getSliceTask(filterTask));
          }
        }}
        className={css.btnIsCollapse}
      >
        {isCollapsed ? <CaretDownOutlined /> : <CaretUpOutlined />}
      </Button>
      <Flex vertical justify={'flex-start'} className={isCollapsed ? css.close : undefined}>
        <ul>
          {sliceTask?.map((task) => (
            <li key={task.id}>
              <Flex gap={5}>
                <Checkbox
                  checked={task.isCompleted}
                  onChange={(event) => {
                    dispatch(updateTask({ isCompleted: event.target.checked, taskId: task.id }));
                  }}
                ></Checkbox>
                <ChangeTitle
                  title={task.title}
                  saveTitle={(value: string, successCallback: () => void) => {
                    dispatch(updateTask({ title: value, taskId: task.id, successCallback }));
                  }}
                  disabled={task.isCompleted}
                />
                <Flex gap={5}>
                  <Button disabled={task.isCompleted}>
                    <DeleteOutlined
                      onClick={() => {
                        dispatch(deleteTask({ id: task.id }));
                      }}
                    />
                  </Button>
                </Flex>
              </Flex>
            </li>
          ))}
        </ul>
      </Flex>
    </div>
  );
};
