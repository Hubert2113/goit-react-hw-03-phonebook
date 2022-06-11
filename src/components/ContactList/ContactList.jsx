import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { DeleteBtn } from './ContactList.styles';

export const ContactList = ({ filter, contacts, deleteContact }) => {
  return (
    <>
      <ul>
        {contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(contact => (
            <li name={contact.name} id={contact.id} key={nanoid()}>
              {contact.name}: {contact.number}{' '}
              <DeleteBtn type="button" onClick={deleteContact}>
                Delete
              </DeleteBtn>
            </li>
          ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array,
  deleteContact: PropTypes.func
}