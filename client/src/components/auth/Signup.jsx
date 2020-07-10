import React from 'react';

import { FormWrapper, Form, Button, Error } from './signupStyle';

const Signup = () => {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);

  const changeHandler = (e, handler) => {
    setError(null);
    const { value } = e.target;
    handler(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, password }),
    });

    if (res.status === 201) {
      // add user to redux and authentication: true;
      // push to blogs page
      console.log('success');
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
          onChange={(e) => changeHandler(e, setName)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => changeHandler(e, setPassword)}
        />
        <Button type='submit'>Sign up</Button>
      </Form>
    </FormWrapper>
  );
};

export default Signup;
