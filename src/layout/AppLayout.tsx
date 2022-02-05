import { Col, Layout, Row } from 'antd';
import { Container } from '.';
import { AppHeader, AppMenu } from '../components';
import { Home } from '../pages';

const { Header, Content, Sider, Footer } = Layout;

export const AppLayout = () => {
  return (
    <Layout>
      <Header style={{ height: 'unset' }}>
        <AppHeader />
      </Header>

      <Layout>
        <Container style={{ marginTop: 15, display: 'flex' }}>
          {/* <Row style={{ marginTop: 15 }} gutter={15}> */}
          <Sider>
            <AppMenu />
          </Sider>

          <Content style={{ marginLeft: 15 }}>
            <Home />
          </Content>
        </Container>

      </Layout>

      <Footer></Footer>
    </Layout>
  );
};
