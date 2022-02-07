import { LayoutOutlined, MessageOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { ReactNode } from 'react';

export interface MenuItem {
  title: string,
  icon: ReactNode,
  link: string
}

export const menuItems: MenuItem[] = [
  { title: 'Profile', icon: <UserOutlined />, link: '/profile' },
  { title: 'News', icon: <LayoutOutlined />, link: '/feed' },
  { title: 'Messenger', icon: <MessageOutlined />, link: '/messages' },
  { title: 'Friends', icon: <TeamOutlined />, link: '/friends' }
];