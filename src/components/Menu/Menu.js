import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../Redux/Auth/selectors';
import { UserMenu } from '../UserMenu/UserMenu';
import { MenuContainer } from './MenuStyles.styled';

export const Menu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <MenuContainer>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && (
          <>
            <NavLink to="/contacts">Contacts</NavLink>
            <UserMenu />
          </>
        )}

        {!isLoggedIn && (
          <div>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </div>
        )}
      </MenuContainer>
    </>
  );
};
