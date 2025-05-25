import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contactsOps';
import { selectContacts } from '../redux/contactsSlice';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch  = useDispatch();
  const contacts  = useSelector(selectContacts);

  const initialValues = { name: '', number: '' };
  const schema = Yup.object({
    name: Yup.string().required('Required'),
    number: Yup.string().required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    
    if (contacts.find(c => c.name === values.name)) {
      alert(`${values.name} is already in contacts`);
      return;
    }
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            Name
            <Field name="name" />
            <ErrorMessage name="name" component="div" className={styles.error}/>
          </label>
          <label>
            Number
            <Field name="number" />
            <ErrorMessage name="number" component="div" className={styles.error}/>
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;