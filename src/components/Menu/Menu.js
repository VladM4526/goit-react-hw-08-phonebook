import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../Redux/Auth/selectors';
import { UserMenu } from '../UserMenu/UserMenu';

export const Menu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <div>
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
      </div>
    </>
  );
};