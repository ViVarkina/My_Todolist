import './App.css';
import { Body } from './body/Body.tsx';
import { Login } from './feature/login';
import { Provider, useSelector } from 'react-redux';
import { RootState, rootStore, useAppDispatch } from './App/rootStore';
import { useEffect } from 'react';
import { autMe } from './entits/user/api/autMe.ts';
import { Button } from 'antd';
import { logOut } from './entits';

function App() {
  const { isAuthorization } = useSelector((state: RootState) => state.userStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isAuthorization) {
      dispatch(autMe());
    }
  }, []);

  const onClick = () => {
    dispatch(logOut());
  };

  if (!isAuthorization) {
    return <Login />;
  }
  return (
    <>
      <Button type={'primary'} onClick={onClick}>
        Выход
      </Button>
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
