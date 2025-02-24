import { Layout, Grid } from 'antd';
import { ReactNode } from 'react';

const { Header, Footer, Sider, Content } = Layout;
const { useBreakpoint } = Grid;

interface Props {
  header: ReactNode;
  footer: ReactNode;
  body: ReactNode;
}

export const BaseLayout = ({ header, footer, body }: Props) => {
  const screen = useBreakpoint();
  console.log(screen);
  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ background: '#ADD1FF' }}>{header}</Header>
      <Layout>
        <Sider
          breakpoint={'xs'}
          collapsedWidth={0}
          width={screen.xs ? '100%' : '25%'}
          zeroWidthTriggerStyle={{ width: '100px' }}
          style={{ background: '#BEDAFF' }}
        >
          jjj
        </Sider>
        <Content style={{ overflow: 'auto', background: 'white' }}>{body}</Content>
      </Layout>
      <Footer style={{ background: '#ADD1FF' }}>{footer}</Footer>
    </Layout>
  );
};

//Медиазапросы, Изменить ширину тодолиста в зависимости от ширины экрана, по клику на тудулист открыть отдельную страницу с туду