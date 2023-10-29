import { MdSearch } from 'react-icons/md';
import { SearchContainer, SearchInput } from './SearchContactStyles.styled';
import { useDispatch } from 'react-redux';
import { getSearch } from '../Redux/Contacts/searchSlice';
import './SearchContactStyles.css';

export const SearchContact = () => {
  const dispatch = useDispatch();
  const search = evt => {
    dispatch(getSearch(evt.target.value));
  };

  return (
    <SearchContainer className="search-container">
      <MdSearch className="search-icon" />
      <SearchInput type="text" onChange={search} placeholder="Search Contact" />
    </SearchContainer>
  );
};
