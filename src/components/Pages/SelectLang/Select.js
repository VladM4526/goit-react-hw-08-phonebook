import { useState } from 'react';
import {
  Container,
  ContainerSelect,
  Select,
  SelectedLang,
  IconDropDown,
  List,
  ListItems,
  ListItemsButton,
} from './StylesSelect.styled';

export const SelectLang = ({ value, setValue }) => {
  const [select, setSelect] = useState(false);

  const option = ['EN', 'UA', 'PL'];

  return (
    <>
      <Container>
        <ContainerSelect>
          <Select onClick={e => setSelect(!select)}>
            <SelectedLang>{value}</SelectedLang>
            <IconDropDown />
          </Select>
        </ContainerSelect>
        {select &&
          option.map(option => {
            return (
              <List key={option}>
                <ListItems
                  onClick={e => {
                    setValue(option);
                    setSelect(false);
                  }}
                >
                  <ListItemsButton>{option}</ListItemsButton>
                </ListItems>
              </List>
            );
          })}
      </Container>
    </>
  );
};
