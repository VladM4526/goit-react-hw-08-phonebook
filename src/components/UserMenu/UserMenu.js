import { logOut } from '../Redux/Auth/operations';
import { selectUser } from '../Redux/Auth/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p>{`Welcome, ${user.email}`}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
