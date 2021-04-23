import React from 'react';
import './styles.css';

const ContactList = ({ contacts }) => {
  console.log(contacts);
  return (
    <>
      <h2>Contacts</h2>
      <ul className='items'>
        {contacts.map((contact, i) => (
          <li key={i} className='item'>
            <span className='name'>{contact.name}</span>
            <span className='number'>{contact.phoneNumber}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
