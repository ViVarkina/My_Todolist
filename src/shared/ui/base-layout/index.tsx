import { Grid, Layout } from 'antd';
import { ReactNode } from 'react';

const { Header, Footer, Sider, Content } = Layout;
const { useBreakpoint } = Grid;

interface Props {
  header: ReactNode;
  footer: ReactNode;
  body: ReactNode;
  sideBar: ReactNode;
}

export const BaseLayout = ({ header, footer, body, sideBar }: Props) => {
  const screen = useBreakpoint();
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
          {sideBar}
        </Sider>
        <Content style={{ overflow: 'auto', background: 'white' , padding:'8px'}} >{body}</Content>
      </Layout>
      <Footer style={{ background: '#ADD1FF' }}>{footer}</Footer>
    </Layout>
  );
};
