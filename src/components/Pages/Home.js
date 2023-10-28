import { useState } from 'react';
import { SelectLang } from './SelectLang/Select';

export const HomePage = () => {
  const [value, setValue] = useState('EN');

  return (
    <>
      <SelectLang value={value} setValue={setValue} />
      <h1>Do you need PhoneBook?</h1>
      <p>Create account and add your contacts here</p>
    </>
  );
};
