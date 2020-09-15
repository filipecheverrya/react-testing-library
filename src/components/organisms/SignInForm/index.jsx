import React from 'react';
import { Form } from '@unform/web';

import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';

function SignInForm({ onSubmit, onRef }) {

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
          aria-label="email-label"
        />
        <Input
          name="password"
          label="Password"
          aria-label="password-label"
        />
        <Button
          className="button-primary"
          type="submit"
          style={{ marginTop: '24px' }}
          aria-label="submit-signin"
        >
          Sign in
        </Button>
      </Form>
      <p>
        You don't have account? 
        <Button
          className="button-link"
          aria-label="signup-button"
        >
          Sign up
        </Button>
      </p>
    </>
  );
}

export { SignInForm };