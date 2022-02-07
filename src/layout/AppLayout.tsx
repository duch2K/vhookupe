import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import { Container } from '.';
import { AppHeader, AppMenu } from '../components';

const { Content, Sider, Footer } = Layout;

export const AppLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/feed');
  }, []);

  return (
    <Layout>
      <AppHeader />

      <Layout>
        <Container style={{ marginTop: 15, display: 'flex' }}>
          <Sider style={{ marginRight: 15 }}>
            <AppMenu />
          </Sider>

          <Content>
            <Outlet />
          </Content>
        </Container>

      </Layout>

      <Footer></Footer>
    </Layout>
  );
};
