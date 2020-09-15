import React from 'react';

import './index.css';

function Button({ children, ...rest }) {
  return (
    <button {...rest}>
      {children}
    </button>
  )
}

export { Button };