import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import { FormWrapper, Form, Button, Error, linkStyle } from './signupStyle';
import { authenticate } from '../../actions/actions';

const Login = () => {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const changeHandler = (e, handler) => {
    setError(null);
    const { value } = e.target;
    handler(value);
  };

  const fieldValidator = (inputName, inputPassword) => {
    if (inputName.length < 3 || inputPassword.length < 3) {
      setError('Name and Password must be at least 3 chars');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = fieldValidator(name, password);
    if (!isValid) return;

    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, password }),
    });

    if (res.status === 200) {
      dispatch(authenticate());
      history.push('/posts');
    } else {
      const data = await res.json();
      const { msg } = data;
      setError(msg);
    }
  };

  return (
    <FormWrapper>
      {error && <Error>{error}</Error>}
      <Form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Name'
          value={name}
          required
          onChange={(e) => changeHandler(e, setName)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          required
          onChange={(e) => changeHandler(e, setPassword)}
        />
        <Button type='submit'>Log in</Button>
        <Link to='/signup' css={linkStyle}>
          Sign up
        </Link>
      </Form>
    </FormWrapper>
  );
};

export default Login;
