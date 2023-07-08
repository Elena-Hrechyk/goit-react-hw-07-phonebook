import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selector';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Forma, Lable, Input, BtnAddContact } from './Form.styled';

const schema = yup.object().shape({
  username: yup.string().required(),
  number: yup.string().required(),
});

const initialValues = {
  username: '',
  number: '',
};

export const FormContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    const nameUser = values.username.toLowerCase().trim();

    const checkContact = contacts.some(
      item => item.username.toLowerCase() === nameUser
    );

    if (checkContact) {
      return alert(`${values.username.trim()} is already in contacts`);
    }

    dispatch(
      addContact({
        id: nanoid(5),
        username: values.username.trim(),
        number: values.number.trim(),
      })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Forma>
        <Lable>
          Name
          <Input
            type="text"
            name="username"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Adrian"
            autoFocus
            required
          />
        </Lable>
        <Lable>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="380671234567"
            required
          />
        </Lable>
        <BtnAddContact type="submit">Add contact</BtnAddContact>
      </Forma>
    </Formik>
  );
};
