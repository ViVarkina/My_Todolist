import { useAppDispatch } from '@/app';
import { logOut } from '@/entits';
import { Button, Flex } from 'antd';

export const Header=()=>{
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(logOut());
  };
  return(
    <Flex justify={'end'} style={{ background:'#ADD1FF', padding:'10px'}}>
    <Button onClick={onClick}>
      Выход
    </Button>
  </Flex>
  )
}