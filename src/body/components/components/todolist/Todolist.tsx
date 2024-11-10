import { Button, Checkbox, Flex, Input } from 'antd';
import css from './Todolist.module.css';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { ChangeTitle } from '../changeTitle/ChangeTitle.tsx';
import { useAppDispatch } from '../../../../App/rootStore';
import { changeTodolist } from '../../../../entits/todolist/api/changeTodolist.ts';
import { DeleteTodolist } from '../deleteTodolist/DeleteTodolist.tsx';

export interface Props {
  title: string;
  todolistId: string;
}

export const Todolist = ({ title, todolistId }: Props) => {
  const dispatch = useAppDispatch();


  return (
    <Flex
      style={{ width: 600 }}
      vertical
      gap={12}
      className={css.todolist}
      justify={'space-between'}
    >
      <Flex justify={'space-between'} gap={5}>
        <ChangeTitle
          title={title}
          saveTitle={(value, callBack) => {
            dispatch(changeTodolist({ todolistId, title: value, successCallback: callBack }));
          }}
        />
        <DeleteTodolist todolistId={todolistId}/>
      </Flex>

      <Flex>
        <Input placeholder={'Add task'} />
        <Button>
          <PlusOutlined />
        </Button>
      </Flex>
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
      <Flex gap={5}>
        <Button>All</Button>
        <Button>Active</Button>
        <Button>Closed</Button>
      </Flex>
    </Flex>
  );
};
