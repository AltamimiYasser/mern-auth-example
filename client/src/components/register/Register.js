import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles.css';
import LoggedInContext from '../../context/LoggedInContext';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');

  const { getLoggedIn } = useContext(LoggedInContext);

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      if (password !== passwordVerify) {
        console.error("passwords don't match");
        // TODO:create alert
      } else {
        const registerData = { email, password };
        await axios.post('/api/auth/register', registerData);
        await getLoggedIn();
        console.log('success');
        // TODO: create alert
      }
    } catch (err) {
      console.error(err);
      // TODO:create alert
    }
  };

  return (
    <>
      <form onSubmit={registerUser}>
        <h1>Register</h1>
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
        <input
          type='password'
          placeholder='Repeat Password'
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
        />
        <button type='submit'>Sign Up</button>
      </form>
      <p>
        Already have an account?{' '}
        <Link to='signin' className='sign-link'>
          sign in
        </Link>
      </p>
    </>
  );
};

export default Register;
