import { LayoutOutlined, MessageOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { ReactNode } from 'react';

export interface MenuItem {
  title: string,
  icon: ReactNode,
  link: string
}

export const menuItems: MenuItem[] = [
  { title: 'Profile', icon: <UserOutlined />, link: '' },
  { title: 'News', icon: <LayoutOutlined />, link: '' },
  { title: 'Messenger', icon: <MessageOutlined />, link: '' },
  { title: 'Friends', icon: <TeamOutlined />, link: '' }
];