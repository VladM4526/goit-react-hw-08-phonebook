import { useState } from 'react';
import { MdPermIdentity } from 'react-icons/md';
import { MdOutlinePhone } from 'react-icons/md';
import { Form, FormInput, FormButton } from './BookContantsFormStyles.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../Redux/Contacts/operations';
import { onGetContacts } from '../Redux/Contacts/Selectors';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './BookContactFormStyles.css';

export const BookContactForm = () => {
  const contacts = useSelector(onGetContacts);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');

  const changeInput = e => {
    switch (e.target.name) {
      case 'name':
        return setName(e.currentTarget.value);
      case 'number':
        return setNumber(e.currentTarget.value);
      default:
        break;
    }
  };

  const addInList = evt => {
    evt.preventDefault();
    const checkNewContact = contacts.some(item => {
      return item.name.trim() === name.trim();
    });
    if (checkNewContact) {
      toast.success(`${name} is already in book contacts `, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    dispatch(addContacts({ name, number: phone }));
    setName('');
    setNumber('');
  };

  return (
    <div>
      <Form onSubmit={addInList}>
        <label>
          <div className="form-input">
            <MdPermIdentity className="form-input-icon" />
            <FormInput
              type="text"
              name="name"
              onChange={changeInput}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              required
              placeholder="Name"
            />
          </div>
        </label>
        <label>
          <div className="form-input">
            <MdOutlinePhone className="form-input-icon" />
            <FormInput
              type="tel"
              name="number"
              onChange={changeInput}
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={phone}
              required
              placeholder="Phone"
            />
          </div>
        </label>
        <FormButton type="submit">Add</FormButton>
        <ToastContainer />
      </Form>
    </div>
  );
};
