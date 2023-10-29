import { logining } from '../Redux/Auth/operations';
import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logining({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" placeholder="email" />

      <label htmlFor="password">Password: </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />

      <button type="submit">Log In</button>
    </form>
  );
};
