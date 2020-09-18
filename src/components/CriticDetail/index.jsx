import React from 'react';

import { Dialog } from '@material-ui/core';

function CriticDetail({ ...rest }) {
  return (
    <Dialog {...rest}>
      Ola mundo
    </Dialog>
  );
}

export { CriticDetail };