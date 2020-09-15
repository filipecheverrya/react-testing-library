import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { SignInForm } from './index';

const onSubmit = jest.fn();

const setup = () => {
  const utils = render(<SignInForm onSubmit={onSubmit} />);

  const components = {
    formElement: utils.getByLabelText('form-signin'),
    submitElement: utils.getByLabelText('submit-signin'),
    emailElement: utils.getByLabelText('email-label'),
    signUpElement: utils.getByLabelText('signup-button'),
    passwordElement: utils.getByLabelText('password-label'),
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

test('form valiate empty fields', () => {
  const utils = setup();
  const { formElement } = utils.components;

  fireEvent.submit(formElement);
  expect(onSubmit).toHaveBeenCalledTimes(1);
});
