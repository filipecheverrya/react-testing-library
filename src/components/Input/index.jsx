import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { TextField } from '@material-ui/core';

// import { useStyle } from './style';

function Input({ name, label, ...rest }) {
  // const classes = useStyle();
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
    <>
      <TextField
        id={fieldName}
        inputRef={inputRef}
        defaultValue={defaultValue}
        error={!!error?.length}
        label={label}
        helperText={error?.length ? error : ''}
        fullWidth
        {...rest}
      />
    </>
  );
}

export { Input };