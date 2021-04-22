import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LoggedInContext = React.createContext();

const LoggedInContextProvider = (props) => {
  // state
  const [loggedIn, setLoggedIn] = useState(undefined);

  // request
  const getLoggedIn = async () => {
    const loggedInRest = await axios.get('/api/auth/loggedin');
    setLoggedIn(loggedInRest.data);
  };

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <LoggedInContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </LoggedInContext.Provider>
  );
};

export default LoggedInContext;
export { LoggedInContextProvider };
