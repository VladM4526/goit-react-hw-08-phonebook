import { Title, DescribeText, ButtonDelete } from './ContactListStyles.styled';
import './ContactListStyles.css';

export const ContactListItem = ({
  item: { number, name },
  onDeleteContact,
}) => {
  return (
    <li>
      <Title>{name}</Title>
      <DescribeText>Phone number: {number}</DescribeText>
      <ButtonDelete
        className="button-delete"
        type="button"
        onClick={onDeleteContact}
      >
        Delete
      </ButtonDelete>
    </li>
  );
};
