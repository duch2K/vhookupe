import { FC } from 'react';
import { Input, Layout } from 'antd';
import { Container } from '../../layout';
import styles from './AppHeader.module.scss';
import { SearchOutlined } from '@ant-design/icons';
import { UserMenu } from '../UserMenu/UserMenu';

export const AppHeader: FC = () => {
  return (
    <Layout.Header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.sider}>
          <div className={styles.logo}>
            VH
          </div>
        </div>

        <div>
          <Input
            placeholder="Search"
            prefix={<SearchOutlined className="site-form-item-icon" />}
          />
        </div>

        <UserMenu />
      </Container>
    </Layout.Header>
  );
};
