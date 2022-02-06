import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import { Container } from '.';
import { AppHeader, AppMenu } from '../components';

const { Header, Content, Sider, Footer } = Layout;

export const AppLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/feed');
  }, []);

  return (
    <Layout>
      <Header style={{ height: 'unset' }}>
        <AppHeader />
      </Header>

      <Layout>
        <Container style={{ marginTop: 15, display: 'flex' }}>
          <Sider>
            <AppMenu />
          </Sider>

          <Content style={{ marginLeft: 15 }}>
            <Outlet />
          </Content>
        </Container>

      </Layout>

      <Footer></Footer>
    </Layout>
  );
};
