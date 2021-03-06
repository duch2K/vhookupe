import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { menuItems } from './menuItems';

const { Item } = Menu;

export const AppMenu = () => {
  return (
    <>
      <Menu style={{width: '100%'}}>
        {menuItems.map(item => (
          <Item key={item.title}>
            <NavLink to={item.link}>
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
          </Item>
        ))}
      </Menu>
    </>
  );
};
