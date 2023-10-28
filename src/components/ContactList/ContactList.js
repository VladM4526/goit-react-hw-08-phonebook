import { useEffect } from 'react';
import { ContactListItem } from './ContactListItem';
import { ContactListContainer } from './ContactListStyles.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, datesAll } from '../Redux/Contacts/operations';
import { onGetContacts, onGetSearch } from '../Redux/Contacts/Selectors';

export const ContactList = () => {
  const contacts = useSelector(onGetContacts);
  const search = useSelector(onGetSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(datesAll(controller.signal));

    return () => {
      return controller.abort();
    };
  }, [dispatch]);

  const onGetText = () => {
    const normalizedFilter = search.toLowerCase().trim();
    return contacts.filter(item => {
      return item.name.toLowerCase().includes(normalizedFilter);
    });
  };
  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactListContainer>
      {onGetText().map(items => (
        <ContactListItem
          onDeleteContact={() => deleteContacts(items.id)}
          item={items}
          key={items.id}
        />
      ))}
    </ContactListContainer>
  );
};
