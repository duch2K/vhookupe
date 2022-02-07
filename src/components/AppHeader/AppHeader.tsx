import { FC } from 'react';
import { Input, Layout, Tooltip } from 'antd'
import { Container } from '../../layout';
import styles from './AppHeader.module.scss';
import { SearchOutlined } from '@ant-design/icons';

export const AppHeader: FC = () => {
  return (
    // <div className={styles.header}>
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

        <div className={styles.user}>
          Auth
        </div>
      </Container>
    </Layout.Header>
    // </div>
  );
}
