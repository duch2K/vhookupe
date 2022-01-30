import { Layout } from 'antd';
import { AppHeader } from '@/components';

const { Header, Content, Sider, Footer } = Layout;

const AppLayout = () => {
  return (
    <Layout>
      <Header>
        <AppHeader />
      </Header>
      <Layout>
        <Sider>
          <AppMenu />
        </Sider>

        <Content>
          main content
        </Content>

        <Sider>
          right sidebar
        </Sider>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  );
}

export default AppLayout;
