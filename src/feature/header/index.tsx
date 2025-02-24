import { useAppDispatch } from '@/app';
import { logOut } from '@/entits';
import { Button } from 'antd';

export const Header = () => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(logOut());
  };
  return <Button onClick={onClick}>Выход</Button>;
};
