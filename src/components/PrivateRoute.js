import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser, isRefreshing } from './Redux/Auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectUser);
  const refreshing = useSelector(isRefreshing);
  const shouldRedirect = !isLoggedIn && !refreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
