import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts, getIsLoading, getError } from 'redux/selector';
import { fetchContacts } from 'redux/operations';
import { FormContact } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './Contacts/ContactList';
import { Loader } from './Loader/Loader';
import { Title, TextTitle, ErroTitle } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Title>Phonebook</Title>
      <FormContact />
      {loading && !error && <Loader />}
      {contacts.length > 0 ? (
        <>
          <TextTitle>Contacts</TextTitle>
          <Filter />
          <ContactList />
        </>
      ) : (
        <TextTitle>No saved contacts</TextTitle>
      )}

      {error && <ErroTitle>{error}</ErroTitle>}
    </>
  );
};
