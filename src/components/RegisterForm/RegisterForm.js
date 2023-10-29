import { register } from '../Redux/Auth/operations';
import { useDispatch } from 'react-redux';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="name">Username</label>
      <input type="text" name="name" id="name" placeholder="name" />

      <label htmlFor="email">Email </label>
      <input type="email" name="email" id="email" placeholder="email" />

      <label htmlFor="password">Password </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />

      <button type="submit">Register</button>
    </form>
  );
};
