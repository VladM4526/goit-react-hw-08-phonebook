import { GlobalStyles } from './GlobalStyles.styled';
import { BookContactForm } from './AddNewContact/BookContantsForm';
import { ContactList } from './ContactList/ContactList';
import { SearchContact } from './SearchContact/SearchContact';
import { Container } from './container.styled';
import './container.css';

export const App = () => {
  return (
    <Container>
      <h1 className="title">Book Contact</h1>
      <BookContactForm />
      <SearchContact />
      <ContactList />
      <GlobalStyles></GlobalStyles>
    </Container>
  );
};
