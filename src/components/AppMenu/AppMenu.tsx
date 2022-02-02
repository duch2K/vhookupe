import { Menu } from 'antd';
import { menuItems } from './menuItems';

const { Item } = Menu;

export const AppMenu = () => {
  return (
    <>
      <Menu>
        {menuItems.map(item => (
          <Item key={item.title}>
            {item.icon}
            <span>{item.title}</span>
          </Item>
        ))}
      </Menu>
    </>
  );
}
