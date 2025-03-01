import { Menu, MenuProps } from 'antd';
import { paths } from '@/shared';
import { useLocation, useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

export const SideBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const menu: MenuItem[] = [
    {
      key: paths.main(),
      label: 'Главная',
      onClick: () => navigate(paths.main()),
    },
    {
      key: paths.todolists(),
      label: 'Тодолисты',
      onClick: () => navigate(paths.todolists()),
    },
  ];

  return <Menu items={menu} selectedKeys={[pathname]} />;
};
