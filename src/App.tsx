import './App.module.css';
import { Body } from './body/Body.tsx';
import { Login } from './feature/login';
import { Provider, useSelector } from 'react-redux';
import { RootState, rootStore, useAppDispatch } from './App/rootStore';
import { useEffect } from 'react';
import { autMe } from './entits/user/api/autMe.ts';
import { Button, Flex, Spin } from 'antd';
import { logOut } from './entits';
import { LoadingOutlined } from '@ant-design/icons';
import css from './App.module.css';

function App() {
  const { isAuthorization, isLoading } = useSelector((state: RootState) => state.userStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isAuthorization) {
      dispatch(autMe());
    }
  }, []);

  const onClick = () => {
    dispatch(logOut());
  };

  if (!isLoading) {
    return (
      <Flex className={css.containerLoading} justify={'center'} align={'center'}>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      </Flex>
    );
  }

  if (!isAuthorization) {
    return <Login />;
  }
  return (
    <>
      <Flex justify={'end'}>
        <Button type={'primary'} onClick={onClick} >
          Выход
        </Button>
      </Flex>
      <Body />
    </>
  );
}

export const WrapperApp = () => {
  return (
    <Provider store={rootStore}>
      <App />
    </Provider>
  );
};
export default App;
