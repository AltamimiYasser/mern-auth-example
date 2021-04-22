import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './layout/navbar/Navbar';
import Landing from './landing/Landing';
import Register from './register/Register';
import Signin from './signin/Signin';
import Contacts from './contacts/Contacts';
import LoggedInContext from '../context/LoggedInContext';

const Router = () => {
  const { loggedIn } = useContext(LoggedInContext);
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {loggedIn ? (
          <Route path='/contacts' component={Contacts} />
        ) : (
          <>
            <Route exact path='/' component={Landing} />
            <Route path='/register' component={Register} />
            <Route path='/signin' component={Signin} />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
