import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameRegex = /^[a-zA-Z]+((['\-\s][a-zA-Z ])?[a-zA-Z]*)*$/;
    const phoneRegex = /^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

    if (!nameRegex.test(name)) {
      setError('The name may only contain letters, apostrophe, dash and spaces.');
      return;
    }
    if (!phoneRegex.test(number)) {
      setError('The phone number is not in the right format.');
      return;
    }

    // Dacă datele sunt valide, trimitem contactul și resetăm formularul
    onAddContact(name, number);
    setName('');
    setNumber('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formclass}>
      <label className={styles.labelclass}>
        Name
        <input
          className={styles.inputclass}
          type="text"
          name="name"
          pattern="^[a-zA-Z]+((['\-\s][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          value={name}
          onChange={handleChange}
          placeholder="Ex: Jack Sparrow"
          autoComplete="name"
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
          onChange={handleChange}
          placeholder="Ex: 123-44-56"
          autoComplete="tel"
        />
      </label>
      {/* Afișare mesaj de eroare */}
      {error && <p className={styles.errorMessage}>{error}</p>}

      <button type="submit" className={styles.buttonclass}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
