import { Button, Dropdown, Avatar, Menu } from 'antd';
import { CloseSquareOutlined, DownOutlined, SettingOutlined } from '@ant-design/icons';
import styles from './UserMenu.module.scss';

export const UserMenu = () => {
  return (
    <Button className={styles.userMenu}>
      <Dropdown
        overlay={
          <Menu style={{width: 130}}>
            <Menu.Item icon={<SettingOutlined />}>
              <span>Settings</span>
            </Menu.Item>
            <Menu.Item icon={<CloseSquareOutlined />}>
              <span>Sign out</span>
            </Menu.Item>
          </Menu>
        }
        trigger={['click']}
        placement="bottomRight"
      >
        <div>
          <Avatar size="large" style={{marginRight: 10}} />
          <DownOutlined />
        </div>
      </Dropdown>
    </Button>
  );
};
