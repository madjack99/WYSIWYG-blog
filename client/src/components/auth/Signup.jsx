import React from 'react';

import { FormWrapper, Form, Button } from './signupStyle';

const Signup = () => {
  return (
    <FormWrapper>
      <Form>
        <input type='text' placeholder='Name' />
        <input type='password' placeholder='Password' />
        <Button type='submit'>Sign up</Button>
      </Form>
    </FormWrapper>
  );
};

export default Signup;
