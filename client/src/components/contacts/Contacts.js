import React, { useEffect, useState } from 'react';
import axios from 'axios';

import NewContactForm from './newContactForm/NewContactForm';
import ContactList from './contactsList/ContactsList';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  // create get contacts function and pass it to both components
  const getContact = async () => {
    try {
      const contactsRes = await axios.get('/api/contacts');
      setContacts(contactsRes.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getContact();
  }, []);
  return (
    <>
      <NewContactForm getContacts={getContact} />
      <ContactList contacts={contacts} />
    </>
  );
};

export default Contacts;
