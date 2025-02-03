import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useAppDispatch } from '@/App/rootStore';
import { deleteTodolist } from '@/entits';

interface PropsType {
  todolistId: string;
}


export const DeleteTodolist=({todolistId}:PropsType)=>{
  const dispatch = useAppDispatch()


  return(
    <Button onClick={()=> dispatch(deleteTodolist({todolistId}))}>
      <DeleteOutlined />
    </Button>
  )
}