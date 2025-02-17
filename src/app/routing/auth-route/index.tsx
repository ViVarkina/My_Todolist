import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/app/rootStore';
import { useEffect } from 'react';
import { autMe } from '@/entits';
import { Navigate, Outlet } from 'react-router-dom';
import { paths } from '@/shared';
import { Flex, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Body } from '@/Body.tsx';
import { Header } from '@/Header.tsx';
import { Footer } from '@/Footer.tsx';


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

  return (
    <>

      {/*<Body />*/}
      {/*каркас, логаут, боковое меню */}
      <Flex vertical style={{margin:'0px'}}>
        <Header/>
        <Body outlet={<Outlet/>}/>
        <Footer/>
      </Flex>

    </>
  );
};

// export default AuthRoute;