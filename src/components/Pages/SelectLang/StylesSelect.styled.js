import styled from 'styled-components';
import { BiSolidDownArrow } from 'react-icons/bi';

export const Container = styled.div`
  position: fixed;
  z-index: 1;
`;

export const ContainerSelect = styled.div`
  width: 94px;
  cursor: pointer;
`;

export const Select = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;

  border-radius: 20px;
  background: #d9d9d9;
`;

export const SelectedLang = styled.p`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.86;
`;

export const IconDropDown = styled(BiSolidDownArrow)`
  width: 20px;
  margin-left: 3px;
`;

export const List = styled.ul`
  margin-top: -15px;
`;

export const ListItems = styled.li`
  width: 94px;
  background: #d9d9d9;
  cursor: pointer;

  &:last-child {
    border-radius: 0px 0px 20px 20px;
  }
`;

export const ListItemsButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 14px;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.86;
  background: #d9d9d9;
  cursor: pointer;
`;
