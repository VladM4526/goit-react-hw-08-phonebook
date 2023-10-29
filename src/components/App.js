import { HomePage } from './Pages/Home';
import { Layout } from './Layout';
import { FormContacts } from './Pages/FormContacts';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Pages/Login';
import { Register } from './Pages/CreateAccount';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
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
