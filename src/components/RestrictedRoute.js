import { Navigate } from 'react-router-dom';
import { selectUser } from './Redux/Auth/selectors';
import { useSelector } from 'react-redux';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectUser);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
