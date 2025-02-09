import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/App/rootStore';
import { useEffect } from 'react';
import { autMe } from '@/entits';
import { Flex, Spin } from 'antd';
import css from '@/App.module.css';
import { LoadingOutlined } from '@ant-design/icons';
import { Navigate, Outlet } from 'react-router-dom';
import { paths } from '@/shared';

export const AuthRoute=()=> {
  const { isAuthorization, isLoading } = useSelector((state: RootState) => state.userStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isAuthorization) {
      dispatch(autMe());
    }
  }, []);

  if (!isLoading) {
    return (
      <Flex className={css.containerLoading} justify={'center'} align={'center'}>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      </Flex>
    );
  }

  if (!isAuthorization) {
    return <Navigate to={paths.login.route()}/>;
  }

  // const onClick = () => {
  //   dispatch(logOut());
  // };

  return (
    <>
      {/*<Flex justify={'end'}>*/}
      {/*  <Button type={'primary'} onClick={onClick}>*/}
      {/*    Выход*/}
      {/*  </Button>*/}
      {/*</Flex>*/}
      {/*<Body />*/}
      <Outlet/>
    </>
  );
}

// export default AuthRoute;