import React from 'react';
import { Link as LinkElement } from '@material-ui/core';

function Link({ children, ...rest }) {
  return (
    <LinkElement {...rest}>
      {children}
    </LinkElement>
  )
}

export { Link };
