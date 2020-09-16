import React from 'react';
import { Button as Container } from '@material-ui/core';

function Button({ children, ...rest }) {
  return (
    <Container {...rest}>
      {children}
    </Container>
  )
}

export { Button };