import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selector';
import { getFilter } from 'redux/selector';
import {
  List,
  ItemContact,
  InfoContact,
  BtnDelContact,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <>
      <List>
        {visibleContacts.map(item => {
          return (
            <ItemContact key={item.id}>
              <InfoContact>
                {item.username}: {item.number}
              </InfoContact>
              <BtnDelContact
                type="button"
                onClick={() => dispatch(deleteContact(item.id))}
              >
                Delete
              </BtnDelContact>
            </ItemContact>
          );
        })}
      </List>
    </>
  );
};

function getVisibleContacts(contacts, filter) {
  return contacts.filter(contact =>
    contact.username.toLowerCase().includes(filter)
  );
}
