import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './styles.css';
import LoggedInContext from '../../context/LoggedInContext';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { getLoggedIn } = useContext(LoggedInContext);

  const history = useHistory();

  const signUserIn = async (e) => {
    e.preventDefault();

    try {
      const signinData = { email, password };
      await axios.post('/api/auth/signin', signinData);
      await getLoggedIn();
      console.log('success');
      // TODO: create alert
      history.push('/contacts');
    } catch (err) {
      console.error(err);
      // TODO:create alert
    }
  };

  return (
    <>
      <form onSubmit={signUserIn}>
        <h1>Signin</h1>
        <input
          type='email'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type='submit'>Sign In</button>
      </form>
      <p>
        Don't Have an Account?{' '}
        <Link to='/signup' className='sign-link'>
          Sign Up
        </Link>
      </p>
    </>
  );
};

export default Signin;
