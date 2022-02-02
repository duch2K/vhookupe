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
        <Container>
          <Row style={{ marginTop: 15 }} gutter={15}>
            <Col>
              <Sider>
                <AppMenu />
              </Sider>
            </Col>

            <Col>
              <Content>
                <Home />
              </Content>
            </Col>
          </Row>
        </Container>

      </Layout>

      <Footer></Footer>
    </Layout>
  );
};
