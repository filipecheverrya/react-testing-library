import React, { useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';

import { useStyle } from './styles';

function SignInForm({ onSubmit }) {
  const formRef = useRef(null);
  const classes = useStyle();

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});
      
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(4).required(),
      });
      
      await schema.validate(data, {
        abortEarly: false,
      });
      
      onSubmit(data);
    } catch (err) {
      const validationErrors = {};
      
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        ref={formRef}
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
          type="password"
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