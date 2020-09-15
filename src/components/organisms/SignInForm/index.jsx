import React, { useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';

function SignInForm() {
  const formRef = useRef(null);

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
      console.log(data);
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