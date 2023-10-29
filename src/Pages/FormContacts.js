import { BookContactForm } from '../components/AddNewContact/BookContantsForm';
import { ContactList } from '../components/ContactList/ContactList';
import { SearchContact } from '../components/SearchContact/SearchContact';

export const FormContacts = () => {
  return (
    <>
      <BookContactForm />
      <SearchContact />
      <ContactList />
    </>
  );
};
