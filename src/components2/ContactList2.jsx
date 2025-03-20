import PropTypes from 'prop-types';

const ContactList = ({contacts}) => (
    <ul>
        {contacts.map(({ id, name, number }) => (
            <li key={id}>{name}: {number}</li>
        ))}
    </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ContactList;