import React, { useContext } from 'react';
import axios from 'axios';
import LoggedInContext from '../../../context/LoggedInContext';
import { useHistory } from 'react-router-dom';

import './styles.css';

const LogoutBtn = () => {
  const history = useHistory();

  const { getLoggedIn } = useContext(LoggedInContext);
  const logout = async () => {
    await axios.get('/api/auth/logout');
    await getLoggedIn();
    history.push('/');
  };

  return (
    <button onClick={logout} className='logout'>
      Logout
    </button>
  );
};

export default LogoutBtn;
