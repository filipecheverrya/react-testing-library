import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import './index.css';

function Input({ name, label, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <fieldset className="input-container">
      <label htmlFor={fieldName}>{label}</label>
      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && (
        <span
          className="error"
          aria-label="error-message"
        >
          {error}
        </span>
      )}
    </fieldset>
  );
}

export { Input };