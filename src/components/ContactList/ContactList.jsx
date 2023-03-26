import ContactItem from 'components/ContactItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';

function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  onEditContact: PropTypes.func.isRequired,
};

export default ContactList;