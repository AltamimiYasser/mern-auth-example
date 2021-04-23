import React, { useContext, useState } from 'react';
import axios from 'axios';
import './styles.css';
import LoggedInContext from '../../../context/LoggedInContext';

const NewContactForm = ({ getContacts }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const { getLoggedIn } = useContext(LoggedInContext);

  const createNewContact = async (e) => {
    e.preventDefault();

    try {
      const formData = { name, phoneNumber };
      await axios.post('/api/contacts', formData);
      console.log('success');
      getContacts();
      // TODO: create alert
    } catch (err) {
      console.error(err);
      // TODO:create alert
    }
  };

  const loggedIn = getLoggedIn();

  return (
    <>
      {loggedIn ? (
        <>
          <form onSubmit={createNewContact}>
            <h6>Create New Contact</h6>
            <input
              type='text'
              placeholder='Name'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type='number'
              placeholder='Phone Number'
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
            <button type='submit'>Create</button>
          </form>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default NewContactForm;
