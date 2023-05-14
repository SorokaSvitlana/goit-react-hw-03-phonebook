import PropTypes from 'prop-types'
import { ContactsList, ContactItem } from './Contacts.Styled';
export const ContactList = ({ contacts, onDeleteContact }) => (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name}: {number} <button onClick={() => onDeleteContact(id)}>Delete</button>
        </ContactItem>
      ))}
    </ContactsList>
  );

  ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape),
    onDeleteContact: PropTypes.func,
  }