import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsOps';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm(`Delete ${contact.name}?`)) {
      dispatch(deleteContact(contact.id));
    }
  };

  return (
    <li>
      {contact.name}: {contact.number}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ContactItem;