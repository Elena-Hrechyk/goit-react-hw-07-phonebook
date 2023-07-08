import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';
import { FormContact } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './Contacts/ContactList';
import { Title, TextTitle } from './App.styled';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <>
      <Title>Phonebook</Title>
      <FormContact />

      {!contacts.length ? (
        <TextTitle>No saved contacts</TextTitle>
      ) : (
        <>
          <TextTitle>Contacts</TextTitle>
          <Filter />
          <ContactList />
        </>
      )}
    </>
  );
};
