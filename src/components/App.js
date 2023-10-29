
import { HomePage } from '../Pages/Home';
import { Layout } from './Layout';
import { FormContacts } from '../Pages/FormContacts';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../Pages/Login';
import { Register } from '../Pages/CreateAccount';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from './Redux/Auth/selectors';
import { useEffect } from 'react';
import { refreshUser } from './Redux/Auth/operations';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken)

  useEffect(() => {
    if (token) {
      dispatch(refreshUser())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<FormContacts />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
      </Route>
    </Routes>
  );
};
