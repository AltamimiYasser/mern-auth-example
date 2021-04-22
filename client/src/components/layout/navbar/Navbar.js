import './styles.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import LoggedInContext from '../../../context/LoggedInContext';

const Navbar = () => {
  const { loggedIn } = useContext(LoggedInContext);

  return (
    <header>
      <h5 className='brand'>
        <Link to='/'>Contacts</Link>
      </h5>
      <nav>
        <ul className='nav-links'>
          {!loggedIn ? (
            <>
              <li>
                <Link to='/register' className='link'>
                  Register
                </Link>
              </li>
              <li>
                <Link to='/signin' className='link'>
                  Signin
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to='/contacts' className='link'>
                  Contacts
                </Link>
              </li>
              <li>
                <Link to='/logout' className='link'>
                  Logout
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
