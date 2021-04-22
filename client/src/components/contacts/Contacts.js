import React from 'react';

import NewContactForm from './newContactForm/NewContactForm';
import ContactList from './contactsList/ContactsList';

const Contacts = () => {
  return (
    <>
      <NewContactForm />
      <ContactList />
    </>
  );
};

export default Contacts;
