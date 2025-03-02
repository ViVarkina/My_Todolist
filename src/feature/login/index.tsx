import { Button, Input, Flex } from 'antd';
import css from './styles.module.css';
import { useEffect, useState } from 'react';
import { RootState, useAppDispatch } from '@/app/rootStore';
import { signIn } from '@/entits/user/api/sinIn.ts';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { autMe } from '@/entits';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const {isAuthorization}=useSelector((state:RootState)=>state.userStore)

  useEffect(() => {
    if (!isAuthorization) {
      dispatch(autMe());
    }
  }, []);

  if(isAuthorization){
    return <Navigate to={'/'}/>
  }

  const onClick = () => {
    if (username && password) {
      dispatch(signIn({ username, password }));
    }
  };


  return (
    <Flex className={css.container} justify={'center'} align={'center'}>
      <Flex gap={12} vertical style={{ width: 500 }}>
        <Input
          placeholder="Login"
          value={username}
          onChange={(el) => setUsername(el.target.value)}
        />
        <Input
          placeholder="Password"
          type={'password'}
          value={password}
          onChange={(el) => setPassword(el.target.value)}
        />
        <Button type="primary" onClick={onClick}>
          Log in
        </Button>
      </Flex>
    </Flex>
  );
};
