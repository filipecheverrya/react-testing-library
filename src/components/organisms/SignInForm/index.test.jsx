import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { SignInForm } from './index';

describe('Sign in:', () => {
  const { getByLabelText, debug } = render(<SignInForm />);
  
  const formElement = getByLabelText('form-signin');
  const submitElement = getByLabelText('submit-signin');
  const emailElement = getByLabelText('email-label');
  // const passowordElement = getByLabelText('passoword-label');
  // const signUpElement = getByLabelText('signup-button');
  
  test('render form', () => {  
    expect(formElement).toBeInTheDocument();
  });

  test('form valiate empty fields', async () => {
    fireEvent.click(submitElement);
    const fieldsetElement = emailElement.closest('fieldset');
    
    debug(fieldsetElement.querySelector('span'));
  });

});
