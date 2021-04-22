import './styles.css';
import React from 'react';

import Router from './components/Router';
import { LoggedInContextProvider } from './context/LoggedInContext';

const App = () => {
  return (
    <LoggedInContextProvider>
      <div className='container'>
        <Router />
      </div>
    </LoggedInContextProvider>
  );
};

export default App;
