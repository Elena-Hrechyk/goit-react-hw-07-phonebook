import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/operations';
import { selectContacts } from 'redux/selector';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Forma, Lable, Input, BtnAddContact } from './Form.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().required(),
});

const initialValues = {
  name: '',
  phone: '',
};

export const FormContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const nameUser = values.name.toLowerCase().trim();

    const checkContact = contacts.some(
      item => item.name.toLowerCase() === nameUser
    );

    if (checkContact) {
      return alert(`${values.name.trim()} is already in contacts`);
    }

    dispatch(
      addContacts({
        name: values.name.trim(),
        phone: values.phone.trim(),
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
            name="name"
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
            name="phone"
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
