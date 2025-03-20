import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const ContactForm = ({ name, number, onChange, onSubmit }) => (
  <form onSubmit={onSubmit} className={styles.formclass}>
    <label className={styles.labelclass}>
      Name
      <input
        className={styles.inputclass}
        type="text"
        name="name"
       pattern="^[a-zA-Z]+((['\-\s][a-zA-Z ])?[a-zA-Z]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Mara, Stella Artois, Bill Gates"
        required
        value={name}
        onChange={onChange}
      />
    </label>
    <label className={styles.labelclass}>
      Number
      <input
        className={styles.inputclass}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={onChange}
      />
    </label>
    <button type="submit" className={styles.buttonclass}>
      Add contact
    </button>
  </form>
);

ContactForm.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default ContactForm;