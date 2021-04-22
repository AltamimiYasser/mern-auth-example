import React, { useContext } from 'react';
import axios from ('axios');
import LoggedInContext from '../../../context/LoggedInContext';

const LogoutBtn = () => {
  const { getLoggedIn } = useContext(LoggedInContext);
  return <button></button>;
};

export default LogoutBtn;
