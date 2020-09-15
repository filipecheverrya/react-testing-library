import React, { useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';

// import { Container } from './styles';

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
      <Form onSubmit={handleSubmit} ref={formRef} >
        <Input name="email" label="E-mail" autoFocus={true} />
        <Input name="password" label="Password" />
        <Button className="button-primary" type="submit" style={{ marginTop: '24px' }}>Sign in</Button>
      </Form>
      <p>
        You don't have account? 
        <Button className="button-link">Sign up</Button>
      </p>
    </>
  );
}

export { SignInForm };