import { Outlet } from 'react-router-dom';
import { Menu } from './Menu/Menu';

export const Layout = () => {
  return (
    <>
      <header>
        <Menu />
      </header>
      <Outlet />
    </>
  );
};
