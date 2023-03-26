import { useState } from 'react';
import PropTypes from 'prop-types';
import { HiUser } from 'react-icons/hi';
import { ImPhone } from 'react-icons/im';
import {
  Item,
  ContactTel,
  ContactName,
  ContactInfo,
} from 'components/ContactItem/ContactItem.styled';
import { Controls, ControlsSave } from 'components/Control/Controls';
import EditForm from 'components/EditForm';
import { editContact, deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

function ContactItem({ name, number, id }) {
  const [editName, setEditName] = useState(name);
  const [editNumber, setEditNumber] = useState(number);
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleEditContact = (newName, newNumber) => {
    if (!isEdit) {
      setIsEdit(true);
    } else {
      setEditName(prevName => (newName ? newName : prevName));
      setEditNumber(prevNumber => (newNumber ? newNumber : prevNumber));
      setIsEdit(false);

      dispatch(
        editContact({
          id: id,
          name: newName ? newName : name,
          number: newNumber ? newNumber : number,
        })
      );
    }
  };

  return (
    <Item>
      {/* if contact saved show contact info */}

      {!isEdit && (
        <ContactInfo>
          <ContactName>
            <HiUser />
            {name}:
          </ContactName>

          <ContactTel>
            <ImPhone />
            {number}
          </ContactTel>
        </ContactInfo>
      )}

      {/* if contact is edit show edit form */}
      {isEdit && (
        <EditForm
          name={editName}
          number={editNumber}
          onEditContact={handleEditContact}
        >
          <ControlsSave id={id} onDeleteContact={handleDeleteContact} />
        </EditForm>
      )}

      {!isEdit && (
        <Controls
          id={id}
          onDeleteContact={handleDeleteContact}
          onEditContact={handleEditContact}
        />
      )}
    </Item>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;