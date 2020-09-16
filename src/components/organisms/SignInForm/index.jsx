import React from 'react';
import { Form } from '@unform/web';

import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';

import { useStyle } from './styles';

function SignInForm({ onSubmit, onRef }) {
  const classes = useStyle();

  return (
    <>
      <Form
        onSubmit={onSubmit}
        ref={onRef}
        aria-label="form-signin"
      >
        <Input
          name="email"
          label="E-mail"
          autoFocus={true}
          aria-label="email-input"
          className={classes.input}
        />
        <Input
          name="password"
          label="Password"
          aria-label="password-input"
          className={classes.input}
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          className={classes.signinButton}
          aria-label="signin-button"
        >
          Sign in
        </Button>
      </Form>
      <p>
        You don't have account? 
        <Button
          variant="outlined"
          color="primary"
          className={classes.signupButton}
          aria-label="signup-button"
        >
          Sign up
        </Button>
      </p>
    </>
  );
}

export { SignInForm };