import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/app/rootStore';
import { useEffect } from 'react';
import { autMe } from '@/entits';
import { Navigate, Outlet } from 'react-router-dom';
import { BaseLayout, paths } from '@/shared';
import { Flex, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Footer, Header } from '@/feature';

export const AuthRoute = () => {
  const { isAuthorization, isInitialize } = useSelector((state: RootState) => state.userStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isAuthorization) {
      dispatch(autMe());
    }
  }, []);

  if (!isInitialize) {
    return (
      <Flex justify={'center'} align={'center'}>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      </Flex>
    );
  }

  if (!isAuthorization) {
    return <Navigate to={paths.login.route()} />;
  }

  return <BaseLayout header={<Header />} footer={<Footer />} body={<Outlet />} />;
};

// export default AuthRoute;