import PropTypes from 'prop-types';
import { ControlWrapper, Button } from 'components/Control/Controls.styled';

export const Controls = ({ id, onDeleteContact, onEditContact }) => {
  return (
    <ControlWrapper>
      <Button type="button" onClick={onEditContact}>
        Edit
      </Button>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </ControlWrapper>
  );
};

export const ControlsSave = ({ id, onDeleteContact }) => {
  return (
    <ControlWrapper>
      <Button type="submit">Save</Button>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </ControlWrapper>
  );
};

Controls.propTypes = {
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  onEditContact: PropTypes.func.isRequired,
};

ControlsSave.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};