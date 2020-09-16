import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { SignInForm } from './index';

const onSubmit = jest.fn();

const placeholders = {
  email: 'example@example.com',
  password: 'admin123',
}

const setup = () => {
  const utils = render(<SignInForm onSubmit={onSubmit} />);

  const components = {
    formElement: utils.getByLabelText('form-signin'),
    submitElement: utils.getByLabelText('signin-button'),
    emailElement: utils.getByLabelText('email-input'),
    signUpElement: utils.getByLabelText('signup-button'),
    passwordElement: utils.getByLabelText('password-input'),
  };

  return {
    ...utils,
    components,
  }
}

test('render form', () => {
  const utils = setup();
  const { formElement } = utils.components;
  
  expect(formElement).toBeInTheDocument();
});

test('method submit should be triggered', () => {
  const utils = setup();
  const { formElement } = utils.components;

  fireEvent.submit(formElement);
  expect(onSubmit).toHaveBeenCalledTimes(1);
});

test('submit email and password', () => {
  const utils = setup();
  const { formElement, emailElement, passwordElement } = utils.components;
  
  fireEvent.change(emailElement, {
    target: { value: placeholders.email }
  });
  fireEvent.change(passwordElement, {
    target: { value: placeholders.password }
  });
  
  expect(emailElement).toHaveValue(placeholders.email);
  expect(passwordElement).toHaveValue(placeholders.password);
  
  fireEvent.submit(formElement);
  
  // TODO: search some method to clean component for each test
  expect(onSubmit).toHaveBeenCalledTimes(2);
});
